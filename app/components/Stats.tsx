// "use client";

// import { motion } from "framer-motion";
// import { useRef } from "react";

// const stats = [
//   { 
//     label: "Projects shipped", 
//     value: "12"  // ← CHANGE THIS to your actual number
//   },
//   { 
//     label: "APIs built & deployed", 
//     value: "08"  // ← CHANGE THIS to your actual number
//   },
//   { 
//     label: "Years of experience", 
//     value: "3+"  // ← CHANGE THIS to your actual number
//   },
//   { 
//     label: "Uptime on live projects", 
//     value: "99.9%"  // ← CHANGE THIS to your actual number
//   },
// ];

// export default function Stats() {
//   const ref = useRef(null);

//   return (
//     <section ref={ref} className="py-12 px-6">
//       <div className="max-w-4xl mx-auto">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {stats.map((stat, i) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1, duration: 0.5 }}
//               viewport={{ once: true }}
//               className="text-center"
//             >
//               <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fb923c] bg-clip-text text-transparent">
//                 {stat.value}
//               </div>
//               <div className="text-sm text-white/30 mt-1">{stat.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }