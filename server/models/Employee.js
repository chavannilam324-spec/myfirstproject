import mongoose from "mongoose";
       import bcrypt from "bcryptjs";


       const ESchema = new mongoose.Schema({
        Ename: {
            type: String,
            required: true,
        },
        Email: {
            type:String,
            required: true,
            unique: true,
        },
        Contact: {
            type:String,
            required: true,
        },
        Age: {
            type:String,
            required: true,
        },
        Gender: {
            type:String,
            required: true,
        },
        Salary: {
            type:String,
            required: true,
        },
        Password: {
            type:String,
            required: true,
        },
        Role: {
            type:String,
            default: "user",
            enum: ["user","admin"],
        },
       });

       emoloyeeSchema.pre("save", async function (next) {
        if(!this.isModified("password")) return next();
        this.Password = await bcrypt.hash(this.Password,10);
        next();
       });

       const Employee = mongoose.model("Employee",employeeSchema);
       export default Employee;

