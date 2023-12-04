import React, { useState } from 'react';

const Archivements = ({ unlockedArchivements }) => {
    const archivementsList = [
        { id: 1, group: "Back", archivements: "Master of the Mighty Lats", requeriments: 250 },
        { id: 1, group: "Back", archivements: "Sultan of Sculpted Scapulae", requeriments: 500 },
        { id: 1, group: "Back", archivements: "Conqueror of the Cobra Muscles", requeriments: 750 },
        { id: 1, group: "Back", archivements: "Overlord of the Opposing Deltoids", requeriments: 1000 },
        { id: 1, group: "Back", archivements: "Ruler of the Radiant Rhomboids", requeriments: 1250 },

        { id: 2, group: "Chest", archivements: "Supreme Sovereign of the Sternum", requeriments: 250 },
        { id: 2, group: "Chest", archivements: "Duke of the Dazzling Pectorals", requeriments: 500 },
        { id: 2, group: "Chest", archivements: "Monarch of the Majestic Mammary Muscles", requeriments: 750 },
        { id: 2, group: "Chest", archivements: "Emperor of the Enigmatic Endopectorals", requeriments: 1000 },
        { id: 2, group: "Chest", archivements: "Pharaoh of the Phenomenal Pecs", requeriments: 1250 },

        { id: 3, group: "Core", archivements: "Sorcerer of the Solid Six-Pack", requeriments: 250 },
        { id: 3, group: "Core", archivements: "Wizard of the Wondrous Waistline", requeriments: 500 },
        { id: 3, group: "Core", archivements: "Magician of the Marvelous Midsection", requeriments: 750 },
        { id: 3, group: "Core", archivements: "Enchanter of the Extraordinary Abdominals", requeriments: 1000 },
        { id: 3, group: "Core", archivements: "Illusionist of the Incredible Inner Core", requeriments: 1250 },

        { id: 4, group: "Legs", archivements: "Grandmaster of Glorious Gams", requeriments: 250 },
        { id: 4, group: "Legs", archivements: "Baron of the Breathtaking Quadriceps", requeriments: 500 },
        { id: 4, group: "Legs", archivements: "Duchess of the Dazzling Hamstrings", requeriments: 750 },
        { id: 4, group: "Legs", archivements: "Count of the Captivating Calf Muscles", requeriments: 1000 },
        { id: 4, group: "Legs", archivements: "Empress of the Elegant Extensors", requeriments: 1250 },

        { id: 5, group: "Arms", archivements: "Sovereign of the Supreme Biceps", requeriments: 250 },
        { id: 5, group: "Arms", archivements: "Commander of the Commanding Triceps", requeriments: 500 },
        { id: 5, group: "Arms", archivements: "Regent of the Radiant Forearms", requeriments: 750 },
        { id: 5, group: "Arms", archivements: "Champion of the Chiseled Brachialis", requeriments: 1000 },
        { id: 5, group: "Arms", archivements: "Hero of the Herculean Arm Muscles", requeriments: 1250 },
    ];

   
  
    const [selectedArchivement, setSelectedArchivement] = useState(null);

    const handleArchivementClick = (archivement) => {
      setSelectedArchivement(archivement);
    };
  
    const handleCloseModal = () => {
      setSelectedArchivement(null);
    };

const getRandomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`;
  };

  // Función para obtener un tono más oscuro del color dado

  return (
    <>
        <legend className="px-2 text-xl font-bold text-white mt-32 mb-16">
          ¡ Logros por Desbloquear !
        </legend>
        <div id="laravel-share-this" className="flex justify-center gap-4 flex-wrap" style={{ color: 'black' }}>
          {archivementsList.map((archivement) => (
            <button
              key={archivement.id}
              onClick={() => handleArchivementClick(archivement)}
              className={`rounded-md py-1 px-2`}
              style={{ backgroundColor: getRandomColor(), color: 'white', cursor: 'pointer' }}
            >
              {archivement.archivements}
            </button>
          ))}
        </div>
     
    
        
       

        {selectedArchivement && (
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-24 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                &#8203;
              </span>
              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                        {selectedArchivement.archivements}
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Necesitas {selectedArchivement.requeriments} kg en {selectedArchivement.group} para desbloquear este logro.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={handleCloseModal}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default Archivements;