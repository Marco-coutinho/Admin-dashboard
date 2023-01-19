import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
    {
        productId: String,
        yearlySalesTotal: Number,
        yealyTotalSoldUnits: Number,
        year: Number,
        monthlyData: [
            {
                
            }
        ]
    },
    { timestamps: true }
);
const ProductStat = mongoose.model("Product", ProductStatSchema);
export default ProductStat;