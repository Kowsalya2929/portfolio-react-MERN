// import { create } from 'zustand'

// const useProjectStore = create((set)=>({
//     projects: [],
//     setProjects: ((contacts)=>set({contacts})),
//     postProject: async(newContact)=>{
//         try{
//             const {firstName,lastName,email,sub,msg} = newContact;
//             const res = await fetch('/api/contact',{
//                 method: 'POST',
//                 headers:{
//                     'Content-Type':'application/json'
//                 },
//                 body: JSON.stringify(newContact)
//             })
//             const data = await res.json()
//             if(!res.ok || !data.success || !firstName || !lastName || !email || !sub || !msg){
//                 return {success: false,message: data.message}
//             }
//             set((state)=> ({contacts : [...state.contacts,data.data]}))
//             return {success: true,message: data.message}
//         }catch(err){
//             console.log(`Post Error : ${err.message}`)
//             return {success: false,message: err.message}
//         }
//     }
// }))

// export default useProjectStore;