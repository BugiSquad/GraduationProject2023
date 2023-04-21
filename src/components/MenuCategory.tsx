import React, { useState } from "react";
import { Button, Card, Typography } from "@mui/material";

interface CategoryItem {
    categoryName: string;
    bgColor: string;
    selectValue: boolean;
}

type Props = {
    categories: CategoryItem[];
};

const bgColor: string = '#00000047'
const categories: CategoryItem[] = [
    { categoryName: "전체", bgColor: bgColor, selectValue: false },
    { categoryName: "찌개류", bgColor: bgColor, selectValue: false },
    { categoryName: "면류", bgColor: bgColor, selectValue: false },
    { categoryName: "분식", bgColor: bgColor, selectValue: false },
];

export const MenuCategory: React.FC<Props> = ({ categories }) => {
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const [selectedPlaceName, setSelectedPlaceName] = useState<string | null>(null);

    const handleClick = (idx: number, placeName: string) => {
        if (idx === selectedIdx) {
            setSelectedIdx(null);
            setSelectedPlaceName(null);
        } else {
            setSelectedIdx(idx);
            setSelectedPlaceName(placeName);
        }
    };
    return (<>
        {categories.map((category, idx) => (
            <Button key={idx} disableElevation disableRipple onClick={() => handleClick(idx, category.categoryName)}>
                <Card
                    sx={{
                        minWidth: 100,
                        minHeight: 40,
                        padding: "10px 5",
                        marginTop: "10px",
                        borderRadius: "25px",
                        backgroundColor: selectedIdx === idx ? category.bgColor : "#F4F4F4",
                    }}
                >
                    <div style={{ alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>
                        <Typography variant={"body2"} fontWeight={"bold"}>
                            {category.categoryName}
                        </Typography>
                    </div>
                </Card>
            </Button>

        ))}            {selectedPlaceName && <div>Selected cg: {selectedPlaceName}</div>}

    </>)
}

export const MenuCategories: React.FC = () => {
    return (<>
        <div>
            <MenuCategory categories={categories} />
        </div>
       </>
    )
}
