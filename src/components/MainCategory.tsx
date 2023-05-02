import { Button, Typography } from "@mui/material"

interface Category {
    category: String,
    img: string,
}

export const MainCategory: React.FC<Category> = ({category, img}) => {
    return (
        <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
            <Button disableElevation disableTouchRipple><img src={img} style={{ width: '90%', height: '90%' }} /></Button>
            <Typography fontWeight={'bold'} fontSize={12}>{category}</Typography>
        </div>
    )
}