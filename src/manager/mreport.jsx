import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../component/table"

export default function ManagerReport() {
  const reports = [
    { id: 1, name: "Rahul Patel", department: "Sales", totalSales: 120, projects: 5, performance: "Excellent" },
    { id: 2, name: "Smit Shaha", department: "Marketing", totalSales: 95, projects: 3, performance: "Good" },
    { id: 3, name: "John Dave", department: "Operations", totalSales: 80, projects: 4, performance: "Average" },
  ]

  return (
    <div style={{display :'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <h2 className="text-2xl font-bold mb-6"> Manager Report</h2>

      <Table className="border rounded-lg shadow w-full max-w-5xl mt-5">
        <TableHeader>
          <TableRow>
            <TableHead className="border text-center">ID</TableHead>
            <TableHead className="border text-center">Name</TableHead>
            <TableHead className="border text-center">Department</TableHead>
            <TableHead className="border text-center">Total Sales</TableHead>
            <TableHead className="border text-center">Projects</TableHead>
            <TableHead className="border text-center">Performance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports.map((report) => (
            <TableRow key={report.id}>
              <TableCell className="border text-center">{report.id}</TableCell>
              <TableCell className="border text-center">{report.name}</TableCell>
              <TableCell className="border text-center">{report.department}</TableCell>
              <TableCell className="border text-center">{report.totalSales}</TableCell>
              <TableCell className="border text-center">{report.projects}</TableCell>
              <TableCell
                className={`border text-center font-semibold ${
                  report.performance === "Excellent"
                    ? "text-green-600"
                    : report.performance === "Good"
                    ? "text-blue-600"
                    : "text-yellow-600"
                }`}
              >
                {report.performance}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
