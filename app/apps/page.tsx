import {  loginIsRequiredServer } from "@/lib/auth";
import { FcComments , FcRatings ,FcTimeline , FcSettings , FcBullish, FcPaid, FcPackage, FcPieChart, FcFilledFilter, FcContacts, FcShipped , FcStatistics     } from "react-icons/fc";



export default async function Page() {
  await loginIsRequiredServer();

  return (
    <>
 
        <div className="flex flex-col justify-center items-center h-[calc(100vh-55px)] pt-1">
            <div className="min-w-[375px] md:min-w-[700px] xl:min-w-[800px] mt-1 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
                <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                    <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span className="flex items-center text-brand-500 dark:text-white">
                        <FcSettings  className="h-16 w-16 text-green-600" />
                        </span>
                    </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                    <p className="font-dm text-lg font-medium text-green-600">Ajustes</p>
                    </div>
                </div>

                <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                    <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span className="flex items-center text-brand-500 dark:text-white">
                        <FcBullish  className="h-16 w-16 text-green-600" />
                        </span>
                    </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                    <p className="font-dm text-lg font-medium text-green-600">Ventas</p>
                    </div>
                </div>

                <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                    <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span className="flex items-center text-brand-500 dark:text-white">
                        <FcPaid  className="h-16 w-16 text-green-600" />
                        </span>
                    </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                    <p className="font-dm text-lg font-medium text-green-600">Compras</p>
                    </div>
                </div>

                <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                    <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span className="flex items-center text-brand-500 dark:text-white">
                        <FcPackage  className="h-16 w-16 text-green-600" />
                        </span>
                    </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                    <p className="font-dm text-lg font-medium text-green-600">Inventario</p>
                    </div>
                </div>

                <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                    <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span className="flex items-center text-brand-500 dark:text-white">
                       <FcPieChart className="h-16 w-16 text-green-600" />
                        </span>
                    </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                    <p className="font-dm text-lg font-medium text-green-600">Contabilidad</p>
                    </div>
                </div>

                <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                    <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span className="flex items-center text-brand-500 dark:text-white">
                        <FcFilledFilter className="h-16 w-16 text-green-600" />
                        </span>
                    </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                    <p className="font-dm text-lg font-medium text-green-600">CRM</p>
                    </div>
                </div>




                <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                    <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span className="flex items-center text-brand-500 dark:text-white">
                        <FcContacts   className="h-16 w-16 text-green-600" />
                        </span>
                    </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                    <p className="font-dm text-lg font-medium text-green-600">Contactos</p>
                    </div>
                </div>

                <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                    <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span className="flex items-center text-brand-500 dark:text-white">
                       <FcShipped    className="h-16 w-16 text-green-600" />
                        </span>
                    </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                    <p className="font-dm text-lg font-medium text-green-600">Logística</p>
                    </div>
                </div>

                <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                    <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span className="flex items-center text-brand-500 dark:text-white">
                        <FcStatistics className="h-16 w-16 text-green-600" />
                        </span>
                    </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                    <p className="font-dm text-lg font-medium text-green-600">Dashboard</p>
                    </div>
                </div>




                

                <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                    <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span className="flex items-center text-brand-500 dark:text-white">
                        <FcTimeline    className="h-16 w-16 text-green-600" />
                        </span>
                    </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                    <p className="font-dm text-lg font-medium text-green-600">Tareas</p>
                    </div>
                </div>

                <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                    <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span className="flex items-center text-brand-500 dark:text-white">
                       <FcRatings     className="h-16 w-16 text-green-600" />
                        </span>
                    </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                    <p className="font-dm text-lg font-medium text-green-600">Infórmes</p>
                    </div>
                </div>

                <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                    <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span className="flex items-center text-brand-500 dark:text-white">
                        <FcComments  className="h-16 w-16 text-green-600" />
                        </span>
                    </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                    <p className="font-dm text-lg font-medium text-green-600">Chat</p>
                    </div>
                </div>








                </div> 
        </div>

      
    </>
  );
}
