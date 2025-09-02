import React from 'react';

export default function Navbar({menus = [], onselect}) {
            
    return (
        <>
    <nav style={{ display: "flex", gap: "20px", }}>
            {menus.map((menu) => (
                <button
                style={{color:'green',
                    backgroundColor:'turquoise'
                }}
                key={menu} 
                onClick={()=>onselect(menu)}>
                    {menu}
                </button>
            ))}
           </nav>
        </>
    )
}