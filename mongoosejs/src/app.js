const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sarkhaildb", {
    useNewUrlParser: true,
    useUnifiedTopology:true})
    .then(()=> console.log("Connection Successful"))
    .catch((err) => console.log(err));                                                                                                                          
    
const playlistSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true,
        unique: true,
        uppercase: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default:Date.now
    }
})

const Playlist = new mongoose.model("Playlist", playlistSchema);

const createDocument = async()=> {
try{
    
    const nodeJs = new Playlist({
       name: "Node JS",
       ctype: "Back End",
       videos: 10,
       author: "Sarkhail",
       active: true,
    })
   
   const result = await Playlist.insertMany([nodeJs]);
   console.log(result);
   
} catch(err) {
    console.log(err)
}
}

createDocument();

const getDocument = async () => {
    try{
    const result = await Playlist.find({videos: {$gt :20}}, {name:1});
    console.log(result);
    }
    catch (err){
        console.log(err);
    }
}

//getDocument();

const updateDocument = async(_id)=> {
    try {
        const result = await Playlist.findByIdAndUpdate({_id}, 
            {$set: {
            name: "Mongooseupdateme"
         } },
    {
        new: true,
        useFindAndModify: false
    })
    console.log(result);
    } catch(err)
    {console.log(err);}
}


//updateDocument("635832f1a02454e1f5ab334f");

const deleteDocument = async (_id) => {
  try{
    const result  = await Playlist.findByIdAndDelete({_id});
    console.log(result);
  }
  catch(err) {
    console.log(err);
  }
}

//deleteDocument("");