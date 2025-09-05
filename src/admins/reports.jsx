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

export default function Reports() {
  const reports = [
    { id: 1, reportName: "User Activity", createdBy: "Admin", createdDate: "2025-09-01", status: "Completed" },
    { id: 2, reportName: "System Logs", createdBy: "Admin", createdDate: "2025-09-02", status: "Pending" },
    { id: 3, reportName: "Monthly Sales", createdBy: "Admin", createdDate: "2025-09-03", status: "In Progress" },
    { id :4, reportName :"Yearly Sales", createdBy :"Admin",createdDate : "2025-09-04", status :"completed"},
  ]

  return (
    <div style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',}}>
      <h2 className="text-2xl font-bold text-center mb-6 text-bule-900">Reports</h2>

      {/* ✅ This div ensures the table is in the middle */}
      <div className="flex justify-center w-full">
        <Table className="border border-gray-300 rounded-lg w-auto mt-5">
          
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px] text-center border border-gray-300">ID</TableHead>
              <TableHead className="border border-gray-300">Report Name</TableHead>
              <TableHead className="border border-gray-300"> Created By</TableHead>
              <TableHead className="border border-gray-300">Created Date</TableHead>
              <TableHead className="border border-gray-300">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reports.map((report) => (
              <TableRow key={report.id}>
                <TableCell className="text-center font-medium border border-gray-300">{report.id}</TableCell>
                <TableCell className="border border-gray-300">{report.reportName}</TableCell>
                <TableCell className="border border-gray-300">{report.createdBy}</TableCell>
                <TableCell className="border border-gray-300">{report.createdDate}</TableCell>
                <TableCell className="border border-gray-600">{report.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
