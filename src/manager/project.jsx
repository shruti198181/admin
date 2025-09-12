
"use client"
import React, {useState,useEffect} from  'react';
import { TableHeader, TableRow ,TableHead,Table, TableCell,TableBody} from '../component/table';

export default function Projects () {
   const [data,setData] = useState([]);
   const [loading,setLoading] = useState(true);
   const [page,setpage] = useState(1);
   const limit = 10;
   const totalPages = Math.ceil(data.length / limit);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const currentTodos = data.slice((page - 1) * limit, page * limit);

   useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((json)=>setData(json))
    .catch((err) =>console.error("fetch error",err))
    .finally(() =>setLoading(false)) 
   },[])

   if(loading) return<p className='p-4 text-center'>Loading</p>

   return(
    <div className='p-4'>
      <h2 className='text-xl font-bold mb-4 text-center'>Projects</h2>
        <Table className="border border-gray-300 text-center border-collapse min-w-[700px] mx-auto">
          <TableHeader>
            <TableRow>
              <TableHead className='border border-gray-300'>Id</TableHead>
              <TableHead className='border border-gray-300'>User Id</TableHead>
              <TableHead className='border border-gray-300'>Title</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentTodos.map((menu) => (
              <TableRow key={menu.id}>
                <TableCell className='border border-gray-300'>{menu.id}</TableCell>
                <TableCell className='border border-gray-300'>{menu.userId}</TableCell>
                <TableCell className='border border-gray-300'>{menu.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
         <div className="flex justify-center items-center mt-4 gap-2   text-center">
        <button
          className={`btn btn-sm btn-primary ${page === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={page === 1}
          onClick={() => setpage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>

        {pages.map((p) => (
          <button
            key={p}
            className={`btn btn-sm ${p === page ? "btn-secondary" : "btn-outline"}`}
            onClick={() => setpage(p)}
          >
            {p}
          </button>
        ))}

        <button
          className={`btn btn-sm btn-primary ${page === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={page === totalPages}
          onClick={() => setpage((prev) => Math.min(prev + 1, totalPages))}
        >
          Next
        </button>
      </div>
    </div>
   )
}