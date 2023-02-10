"use client"
import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
export async function getServerSideProps(){
 const resp= await fetch ("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");
  return {
  props : {
   Pokemons: await resp.json(),
  },
 };
}
export default function Home({ Pokemons }) 
{
 
 return (
   <div>
   
    <h1>pokemon list </h1> 
    
    <div className={styles.grid}>
     {
      Pokemons.map((Pokemon)=>(
<div className={styles.card} key={Pokemon.id}>
<Link href={`/pokemon/${Pokemon.id}`}>
<img src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${Pokemon.image}`} alt={Pokemon.name} href={`/pokemon/${Pokemon.id}`} />
<h3 href={`/pokemon/${Pokemon.id}`} > {Pokemon.name}</h3>
</Link>
</div>
      ))
     }
     </div>  
   </div>
    );
  }
  
