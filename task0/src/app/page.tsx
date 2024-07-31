import Table from "./components/Table";

export default function Home() {
    return (
        <div>
            <div 
                style={{height: "321px", backgroundImage: `url(/header.png)` }} 
                className='px-4 xs:px-10 sm:px-14 md:px-24 lg:px-36 xl:px-48 2xl:px-60 flex items-center border border-black bg-center bg-cover'>
                <div className='space-y-3'>
                    <h1 className='text-4xl md:text-5xl text-prime-blue montserrat font-extrabold'>Amaia Scapes Laguna</h1>
                    <h2 style={{letterSpacing: "1rem"}} className='text-3xl md:text-4xl font-extrabold text-prime-green uppercase'>Property List</h2>
                </div>
            </div>
            <div className='py-16 px-4 xs:px-10 sm:px-14 md:px-24 lg:px-36 xl:px-48 2xl:px-60 bg-prime-blue flex justify-center'>
                <div className="space-y-8">
                    <Table />
                    <Table />
                    <Table />
                    <Table />
                    <Table />
                    <Table />
                </div>
            </div>
        </div>
    );
}
