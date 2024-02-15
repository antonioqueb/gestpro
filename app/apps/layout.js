import NavbarPrimary from "@/components/NavPrimary";


export default async function Layout({ children }) {
  return (
    <main className="flex w-full justify-center items-center">

      <div className="flex flex-col w-full justify-center items-center">
       <NavbarPrimary /> 
      
        {children}
      </div>
    </main>
  );
}
