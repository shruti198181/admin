"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../component/table"

export default function Projects() {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div className=" p-6 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>

        <Table>
         
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] border border-gray-800">Project ID</TableHead>
              <TableHead className="border border-gray-800">Name</TableHead>
              <TableHead className="border border-gray-800">Status</TableHead>
              <TableHead className="border border-gray-800">Deadline</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium border border-gray-800">101</TableCell>
              <TableCell className="border border-gray-800">Website Redesign</TableCell>
              <TableCell className="border border-gray-800">In Progress</TableCell>
              <TableCell className="border border-gray-800">2025-09-15</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium border border-gray-800">102</TableCell>
              <TableCell className="border border-gray-800">Mobile App</TableCell>
              <TableCell className="border border-gray-800">Completed</TableCell>
              <TableCell className="border border-gray-800">2025-08-28</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium border border-gray-800">103</TableCell>
              <TableCell className="border border-gray-800">Admin Dashboard</TableCell>
              <TableCell className="border border-gray-800">Pending</TableCell>
              <TableCell className="border border-gray-800">2025-10-10</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
