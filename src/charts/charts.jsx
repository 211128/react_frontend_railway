import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const LinesChart = ({ userId }) => {
    const [weeklyExerciseData, setWeeklyExerciseData] = useState([]);
    const [monthlyExerciseData, setMonthlyExerciseData] = useState([]);

    // Tabla de equivalencias entre ID de ejercicio y grupo muscular
    const muscleGroupMap = {
        1: 'Back',
        2: 'Chest',
        3: 'Core',
        4: 'Legs',
        5: 'Arms',
    };

    useEffect(() => {
        const fetchWeeklyData = async () => {
            try {
                
                const response = await fetch(`https://muscles.entranat.site/muscle/list`);
                const data = await response.json();
                const storedUser = localStorage.getItem('authenticatedUser');
  
                // Verificar si hay un usuario almacenado en el localStorage
                if (!storedUser) {
                  // Manejar el caso en el que no hay usuario autenticado
                  console.error('No hay usuario autenticado');
                  return;
                }
                
                // Parsear el usuario almacenado en el localStorage
                const parsedUser = JSON.parse(storedUser);
                  
                // Filtrar los ejercicios por el ID de usuario proporcionado y una semana
                const filteredExercises = data.data.exercises
                    .filter(exercise => exercise.userid === parsedUser.data.id)
                    .map(exercise => ({
                        ...exercise,
                        muscleGroup: muscleGroupMap[exercise.exercises], // Agregar el nombre del grupo muscular
                    }));

                setWeeklyExerciseData(filteredExercises);
            } catch (error) {
                console.error('Error al obtener datos semanales del servidor:', error);
            }
        };

        const fetchMonthlyData = async () => {
            try {
                const response = await fetch(`https://muscles.entranat.site/muscle/list`);
                const data = await response.json();

                // Filtrar los ejercicios por el ID de usuario proporcionado y una semana
                const filteredExercises = data.data.exercises
                    .filter(exercise => exercise.userid === userId)
                    .map(exercise => ({
                        ...exercise,
                        muscleGroup: muscleGroupMap[exercise.exercises], // Agregar el nombre del grupo muscular
                    }));

                    setMonthlyExerciseData(filteredExercises);
            } catch (error) {
                console.error('Error al obtener datos semanales del servidor:', error);
            }
        };

        fetchWeeklyData();
        fetchMonthlyData();
    }, [userId]);

    const weeklyChartData = {
        labels: weeklyExerciseData.map(exercise => exercise.muscleGroup),
        datasets: [
            {
                label: 'Entrenamiento semanal',
                data: weeklyExerciseData.map(exercise => parseFloat(exercise.weight)),
                tension: 0.5,
                fill: true,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(255, 99, 132)',
                pointBackgroundColor: 'rgba(255, 99, 132)',
            },
        ],
    };

    const weeklyChartOptions = {
        scales: {
            y: {
                min: 0,
            },
            x: {
                ticks: { color: 'rgb(255, 99, 132)' },
            },
        },
    };

    const monthlyChartData = {
        labels: weeklyExerciseData.map(exercise => exercise.muscleGroup),
        datasets: [
            {
                label: 'Entrenamiento semanal',
                data: weeklyExerciseData.map(exercise => parseFloat(exercise.weight)),
                tension: 0.5,
                fill: true,
                borderColor: 'rgba(173, 216, 230, 10)',
                backgroundColor: 'rgba(173, 216, 230, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(173, 219, 132)',
                pointBackgroundColor: 'rgba(170, 215, 132)',
            },
        ],
    };

    const monthlyChartOptions = {
        scales: {
            y: {
                min: 0,
            },
            x: {
                ticks: { color: 'rgb(255, 99, 232)' },
            },
        },
    };

    return (
        <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-4">Entrenamiento semanal</h2>
                <Line data={weeklyChartData} options={weeklyChartOptions} />
            </div>

            <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-4">Entrenamiento mensual</h2>
                <Line data={monthlyChartData} options={monthlyChartOptions} />
            </div>
        </div>
    );
};

export default LinesChart;
