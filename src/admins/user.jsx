
                   import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../component/table";

export default function UsersData() {
  return (
    <div className="p-4">
      <Table className="border border-gray-300">
        <TableHeader>
          <TableRow className="border border-gray-300">
            <TableHead className="border border-gray-300 w-[50px]">ID</TableHead>
            <TableHead className="border border-gray-300">Name</TableHead>
            <TableHead className="border border-gray-300">Email</TableHead>
            <TableHead className="border border-gray-300">PhoneNumber</TableHead>
            <TableHead className="border border-gray-300">City</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border border-gray-300">
            <TableCell className="border border-gray-300 font-medium">1</TableCell>
            <TableCell className="border border-gray-300">John Doe</TableCell>
            <TableCell className="border border-gray-300">john@gmail.com</TableCell>
            <TableCell className="border border-gray-300">9825369622</TableCell>
            <TableCell className="border border-gray-300">Surat</TableCell>
          </TableRow>
          <TableRow className="border border-gray-300">
            <TableCell className="border border-gray-300 font-medium">2</TableCell>
            <TableCell className="border border-gray-300">Jane Smith</TableCell>
            <TableCell className="border border-gray-300">jane@gmail.com</TableCell>
            <TableCell className="border border-gray-300">9825396655</TableCell>
            <TableCell className="border border-gray-300">Mumbai</TableCell>
          </TableRow>
          <TableRow className="border border-gray-300">
            <TableCell className="border border-gray-300 font-medium">2</TableCell>
            <TableCell className="border border-gray-300">Rahul Patel</TableCell>
            <TableCell className="border border-gray-300">rp@gmail.com</TableCell>
            <TableCell className="border border-gray-300">9825825515</TableCell>
            <TableCell className="border border-gray-300">Pune</TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </div>
  );
}
