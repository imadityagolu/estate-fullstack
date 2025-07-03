import UserModels from '../models/user.models.js';

export const signup = async (req, res) => {
    
    const { username, email, password} = req.body;
    if(!username || !email || !password){
        return res.status(404).json({
        message: "fill all the fields"
        });
    }

    const usernamee = await UserModels.findOne({ username: req.body.username});
    if(usernamee){
        return res.status(404).json({
        message: "username already exists"
        });
    }

    const useremail = await UserModels.findOne({ email: req.body.email});
    if(useremail){
        return res.status(404).json({
        message: "email already exists"
        });
    }

    const user = await UserModels.create(req.body);
    res.status(200).json({
        message: "Registered successfully",
        data: user
    });
};

const userController = { signup }

export default userController;