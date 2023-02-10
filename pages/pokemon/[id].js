"use client"
import { useRouter } from "next/router";
import React from 'react'
import { useEffect , useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/details.module.css'
 export default function Details(){
   
    const {
        query:{id},
    }=useRouter();
    const [Pokemon,setPokemon]=useState(null);
    useEffect(()=>{
  async function getPokemon(){
    const resp= await fetch (`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`);
  setPokemon(await resp.json());
  }
  if (id){
   getPokemon();
  }
   },[id])
   if (!Pokemon){
    return null ; 
   }
    return <div> 
 
    <title>
      {Pokemon.name}
    </title>

  <div>
    <Link href="/">
      <p> Back To Home</p>
    </Link>
  </div>
  <div className={styles.layout}>
    <div>
      <img className={styles.picture} src={`http://jherr-pokemon.s3.us-west-1.amazonaws.com/${Pokemon.image}`} alt={Pokemon.name.english}/>
    </div>
<div>
  <div className={styles.name}>{Pokemon.name}</div>
  <div className={styles.type}>{Pokemon.type.join(",")}</div>
  <table>
            <thead className={styles.header}>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Pokemon.stats.map(({ name, value }) => (
                <tr key={name}>
                  <td className={styles.attribute}>{name}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
</div>
  </div>
</div>;
}