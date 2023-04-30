import { Button } from "@mui/material"
import { MenuCategories } from "./MenuCategory"



export const MenuList: React.FC = () => {
    return (
        <>
        <MenuCategories />
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", paddingTop: "10px" }}>

        <Button style={{
                    backgroundColor: '#FE724C', color: "white", fontWeight: "bold", borderRadius: "0.5rem", padding: "0.5rem", boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.3)"
                }}>
                    로그인
                </Button>
        </div>
        </>
    )
}