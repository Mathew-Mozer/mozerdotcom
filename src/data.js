export const skills = [
    {name:"PHP",Rating:3,category:["Backend"]},
    {name:"Javascript / ES6",Rating:5,category:["Front-End"]},
    {name:"MySQL",Rating:3,category:["Database","Backend"]},
    {name:"JQuery",Rating:4,category:["Front-End"]},
    {name:"MongoDB",Rating:3,category:["Backend"]},
    {name:"Node.js",Rating:5,category:["Backend"]},
    {name:"C#",Rating:3,category:["Backend","Front-End"]},
    {name:"ASP.NET",Rating:3,category:["Front-End","Backend"]},
    {name:"Firebase",Rating:4,category:["Backend"]},
    {name:"NoSQL",Rating:3,category:["Backend"]},
    {name:"ReactJS",Rating:5,category:["Front-End"]},
    {name:"Bootstrap",Rating:5,category:["Front-End"]},
    {name:"Electron",Rating:3,category:["Front-End"]},
    {name:"Azure DevOps",Rating:3,category:["DevOps"]},
    {name:"GitHub",Rating:4,category:["Repos"]},
    {name:"Android Native",Rating:2,category:["Mobile"]},
    {name:"React Native CLI",Rating:3,category:["Mobile"]},
    {name:"Expo",Rating:3,category:["Mobile"]},
]

export const Projects = [
    {
        id:0,
        name:'Player Tracker',
        url:'',
        code:'',
        current:true
    },
    {
        id:1,
        name:'ChimeraTV',
        url:'',
        code:'',
        description:`ChimeraTV was the flagship software package of Typhon Pacific Studios. The software ran on Android TV set top boxes and surrounded the inside of casinos. Each display could run seperately from another and was managed by Serpent Control Panel`,
        current:false,
        tech:[{name:"Unity3D",link:"http://www.unity3d.com"},{name:"C#", link:""}],
        relatedProjects:[{name:"Serpent Control Panel",id:2}],
        videos:["https://www.youtube.com/embed/YPdNP8IkpYc","https://www.youtube.com/embed/oHOorFA_i4k"]
    },
    {
        id:2,
        name:'Serpent Control Panel',
        url:'',
        code:'',
        tech:[{name:"PHP",link:"http://www.unity3d.com"},{name:"Jquery", link:""},{name:"MySQL", link:""},{name:"Bootstrap", link:""}],
        description:'Serpent Control Panel is the web administration of ChimeraTV.',
        current:false,
        relatedProjects:[{name:"ChimeraTV",id:1}],
        videos:["https://www.youtube.com/embed/YPdNP8IkpYc"]
    }
]

export const snippets = [
    {language:"Javascript",name:"Sort object array by property",snippet:"var arr = [{id:0,name:apple},{id:1,name:orange}]"}
]