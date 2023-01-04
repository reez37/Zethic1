const func = (data) =>{
    const strings = data.split('\n')
    const dir = ["N","W","S","E"]
    const num = [0,1,2,3]
    let results = []
    let hit = 0
    const wallx = strings[0][0]
    const wally = strings[0][2]
    strings.splice(0,1)
    const loop = (strings.length-1)/2
    for (let i = 0; i < loop; i++) {
        loc = strings[0].split(" ")
        const comm = strings[1]
        const index = dir.indexOf(loc[2])
        
        
        strings.splice(0,2)
        if(!(dir.includes(loc[2]))){
            results.push("I dint get you 🤷‍♂️")
            continue
        }
        loc[2]=num[index]
        loc = loc.map(str => {return parseInt(str)})
    
        for (const i in comm) { 
           
            if (comm[i]=="R") {
                loc[2] = loc[2]-1
                if(loc[2]==-1){
                    loc[2]=3
                }
            }
    
            else if (comm[i]=="L"){
                loc[2] = loc[2]+1
                if(loc[2]==4){
                    loc[2]=0
                }
            }
             else if (comm[i]=="F"){
                if(loc[2]==0){
                    loc[1]=loc[1]+1
                    if(loc[1]>wally){
                        hit = 1
                    }
                }
    
                else if(loc[2]==2){
                    loc[1]=loc[1]-1
                    if(loc[1]<0){
                        hit = 1
                    }
                }
                else if(loc[2]==3){
                    loc[0]=loc[0]+1
                    if(loc[0]>wallx){
                        hit=1
                    }
                }
                else{
                    loc[0]=loc[0]-1
                    if(loc[0]<0){
                        hit=1
                    }
                }
             }
             else{
                results.push("I dint get you 🤷‍♂️")
                break
             }
    
        }
        const indexs = num.indexOf(loc[2])
        loc[2] = dir[indexs]
        loc = loc.map(str => {return str.toString()}).join(" ")
        if(hit==1){
            results.push("Robot has hit the wall 🙄")
            hit = 0
        }
        else{
            results.push(loc)
        }
    } 
    return results
    
    }
    
    module.exports = func;






    // code for oneline input
// const strs = strings.split(" ")
// const dir = ["N","W","S","E"]
// const num = [0,1,2,3]
// // const wallx = strs[0]
// // const wally = strs[1]
// let result = ""
// // const loop = (strs.length-2)/4
// strs.splice(0,2)
// for (let i = 0; i < loop; i++) {
//     d = strs.splice(0,4)
//     const ind = dir.indexOf(d[2])
//     d[2] = num[ind]
//     const com = d.splice(3,3)
//     const newloc = d.map(str =>{
//         return parseInt(str)
//     })

   
//    for (const i in com[0]) { 
   
//     if (com[0][i]=="R") {
//         newloc[2] = newloc[2]-1
//         if (newloc[2]== -1){
//             newloc[2]=3
//         }
//     }
//     else if (com[0][i]=="L"){
//         newloc[2] = newloc[2]+1
//         if (newloc[2]== 4){
//             newloc[2]=0
//         }
//     }
//     else{
//         if(newloc[2]==0){
//             newloc[1] = newloc[1]+1
//         }
//         else if(newloc[2]==1){
//             newloc[0] = newloc[0]-1
//         }
//         else if(newloc[2]==2){
//             newloc[1] = newloc[1]-1
//         }
//         else {
//             newloc[0] = newloc[0]+1
//         }

//     }

    
        
    
//    }
   
//    const inda =  num.indexOf(newloc[2])
//    newloc[2] = dir[inda]
//     result = newloc.map(str =>{
//     return str.toString()
// }).join(" ")

// results.push(result)
 
// }