import React from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../component/table"

export default function UsersData() {
  return (
    <div className="p-4">
      <Table className="border border-black">
        <TableCaption className="text-gray-500">A list of all users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="ms-2">Email</TableHead>
            <TableHead className="ms-3">PhoneNumber</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>John Dave</TableCell>
            <TableCell>john@example.com</TableCell>
           <TableCell>9825397659</TableCell> 
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">2</TableCell>
            <TableCell> Smit Shah</TableCell>
            <TableCell>Simt@example.com</TableCell>
            <TableCell>9638323008</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">3</TableCell>
            <TableCell>Rahul Patel</TableCell>
            <TableCell>rp@gmail.com</TableCell>
            <TableCell>9429267589</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
