const bodyParser = require("body-parser");
const express=require("express");
const res = require("express/lib/response");
const app=express()

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
let items=["Breakfast",
    "College",
    "Study",
    "Lunch"];
let workItems=[]
    app.get("", (req, res) => {
        // res.write("<h1>Welcome to home page</h1>")
        let today = new Date();
        // currentdate = today.getDay();
        // day = "";
       
        // switch (currentdate) {
        //   case 0:
        //     day = "Sunday Its' a Weekend";
      
        //     break;
        //   case 1:
        //     day = "Monday Its' a Weekend";
      
        //     break;
        //   case 2:
        //     day = "Tuesday It's a Weekday";
      
        //     break;
        //   case 3:
        //     day = "Wenesday It's aWeekday";
      
        //     break;
        //   case 4:
        //     day = "Thrusday It's a Weekday";
      
        //     break;
        //   case 5:
        //     day = "Friday It's a Weekday";
      
        //     break;
        //   case 6:
        //     day = "Saturday It's a Weekend";
      
        //     break;
      
        //   default:
        //     break;
        // }
        // res.render("list", { kindofday : day });
        let option={
            month:"long",
            day:"numeric",
            year:"numeric",
            weekday:"long",
            // hour:"numeric",
            // minute:"numeric",
           
        }
        let opt={
            hour:"numeric",
            minute:"numeric",
        }
        
        let newday=today.toLocaleDateString("en-US",option)
        let news=today.toLocaleDateString("hi-IN",option)

        res.render("list",{listofItem:newday,newListItems:items})
        // res.render("list",{time:news})
        
       
     
})
app.post("/",(req,res)=>{
    let  item=req.body.newItem

    // res.render("list",{newListItem:item})

  
    if(req.body.button==="work"){
        workItems.push(item)
        res.redirect('/work')
    }
    else{
        items.push(item)
        res.redirect("/")
    }
})
app.get("/work",(req,res)=>{
    res.render('list',{listofItem:"work",newListItems:workItems})
})
app.get("/about",(req,res)=>{
    res.render('about')
})
app.listen(3000,()=>{
    console.log("server is runnig 3000");
})

