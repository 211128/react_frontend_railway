import React from 'react';
const ListArchivements = () => {
  const archivementsList = [
    
  ]; 

  return (
    <>
      {archivementsList.map((archivement) => (
        <div key={archivement.id} className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg text-black font-semibold">{archivement.group} - {archivement.archivements}</p>
              <p className="text-slate-500 font-medium">{archivement.requeriments} lbs</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export { ListArchivements as default, ListArchivements as ArchivementsList };
