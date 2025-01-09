import { Stack } from "@mui/material"
import { categories } from "../utils/constants"

const SideBar = ({ selectedCategory, setSelectedCategory}) => (
    <Stack 
        direction="row"
        sx={{
            overflowY: "auto",
            height: {sx: "auto", md:"95%"},
            flexDirection: {md: "column"},
            padding: "10px",
            // backgroundColor: "#f5f5f5",
            borderRadius: "12px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
        }}
    >
        {categories.map((category) => (
            <button 
                className="category-btn"
                onClick={() => setSelectedCategory(category.name)}
                style={{
                    background: category.name === selectedCategory ? "navy" : "transparent",
                    color: category.name === selectedCategory ? "white" : "navy",
                    borderRadius: "8px",
                    margin: "4px 0",
                    transition: "all 0.3s ease",
                    width: "100%"
                }}
                key={category.name}
            >
                <span 
                    style={{
                        color: category.name === selectedCategory ? "white" : "navy",
                        marginRight: "15px",
                        fontSize: "20px",
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    {category.icon}
                </span>
                <span
                    style={{
                        opacity: category.name === selectedCategory ? "1.0" : "0.8",
                        color: category.name === selectedCategory ? "white" : "navy",
                        fontSize: "15px",
                        fontWeight: category.name === selectedCategory ? "600" : "400"
                    }}
                >
                    {category.name}
                </span>
            </button>
        ))}
    </Stack>
)

export default SideBar