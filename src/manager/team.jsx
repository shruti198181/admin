import { TableHead,Table,TableHeader, TableRow ,TableCell,TableBody} from "../component/table"

export default function Team() {
    const managers = [
        {id : 1,
            name :'Rahul Patel',
            department :'Sale',
            role:'manager',
        },
        {
            id:2,
            name :'Smit Shaha',
            department :'Marketing',
            role:'manager',
        },
        {
            id:3,
            name :'John Dave',
            department :'Operations',
            role :'manager',
        },
    ]
    return(
        <div style={{display :'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
         <div className="fs-3 color-blue">Manager Team</div>
          <Table className="mt-5">
                <TableHeader>
                     <TableRow>
                    <TableHead className="border border-gray-300">Id</TableHead>
                    <TableHead className="border border-gray-300">Name</TableHead>
                    <TableHead className="border border-gray-300">DepartMent</TableHead>
                    <TableHead className="border border-gray-300">Role</TableHead>
                    </TableRow>
                </TableHeader>
              <TableBody>
              {managers.map((manager) => (
                 <TableRow key={manager.id}>
                    <TableCell className="border border-gray-300">{manager.id}</TableCell>
                    <TableCell className="border border-gray-300">{manager.name}</TableCell>
                    <TableCell className="border border-gray-300">{manager.department}</TableCell>
                    <TableCell className="border border-gray-300">{manager.role}</TableCell>
                 </TableRow>
              ))}
                
                </TableBody>  
          </Table>
        </div>
    )
}