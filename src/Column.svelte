<script>
import { each } from "svelte/internal";


    export let data;
    console.log('render column', data.name);
</script>

{#if data.name == 'Github' }
    <div class="box {data.class}">
        <h2>{data.name}</h2>
        <p class="plan-desc">{data.name_desc}</p>
        <a class="github-ico" alt='A link to repo for self hosting and fun' href="https://github.com/rutynka/routine-svelte-quiz">G</a>
        <!-- {#each data.features as row}
            <p>{@html row.n}</p>
        {/each} -->
        <!-- <h3><span class="currency">{data.price.currency}</span>
            <span>{data.price.amount} </span>
            <span>{data.price.desc}</span>
        </h3>
        <a href="{data.btn_url}">{data.btn_desc}</a> -->
    </div>
{:else}
    <div class="box {data.class}">
        <h2>{data.name}</h2>
        <p class="plan-desc">{data.name_desc}</p>
        {#each data.features as row}
            <div class="desc">{#if row.desc.length > 3 }<div class="i" title="{row.desc}">&#9432;</div>{/if}&nbsp;<span>{@html row.n}</span></div>
        {/each}
        <h3><span>{data.price.amount}</span><span class="currency">{data.price.currency}</span>
            <span>{data.price.desc}</span>
        </h3>
        <a href="{data.btn_url}">{data.btn_desc}</a>
    </div>
{/if}



<style>
    .github-ico {
        z-index:1;
        cursor:pointer;
        margin:5px 15px;
        width: 13vw;
        height: 20vh;
        background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='12 12 40 40'%3e%3cpath fill='%23333' d='M32 13.4c-10.5 0-19 8.5-19 19 0 8.4 5.5 15.5 13 18 1 .2 1.3-.4 1.3-.9v-3.2c-5.3 1.1-6.4-2.6-6.4-2.6-.9-2.1-2.1-2.7-2.1-2.7-1.7-1.2.1-1.1.1-1.1 1.9.1 2.9 2 2.9 2 1.7 2.9 4.5 2.1 5.5 1.6.2-1.2.7-2.1 1.2-2.6-4.2-.5-8.7-2.1-8.7-9.4 0-2.1.7-3.7 2-5.1-.2-.5-.8-2.4.2-5 0 0 1.6-.5 5.2 2 1.5-.4 3.1-.7 4.8-.7 1.6 0 3.3.2 4.7.7 3.6-2.4 5.2-2 5.2-2 1 2.6.4 4.6.2 5 1.2 1.3 2 3 2 5.1 0 7.3-4.5 8.9-8.7 9.4.7.6 1.3 1.7 1.3 3.5v5.2c0 .5.4 1.1 1.3.9 7.5-2.6 13-9.7 13-18.1 0-10.5-8.5-19-19-19z'/%3e%3c/svg%3e") 0 0/100% 100% no-repeat;
    }
    .currency {
        color: #a41111;
        font-size: 12px;
        position: relative;
        bottom: 6px;
    }
    .plan-desc { color:rgb(126, 126, 126);margin-bottom: 40px;}
    .box { 
        border: 1px solid rgb(78, 168, 172); 
        border-top: 4px solid rgb(78, 168, 172);
        margin:1vw;
        
        padding:2vw; 
        background-color: rgba(213, 245, 220, 0.5);
        border-radius: 3px;
    }
    .i {font-size:.8em; cursor: pointer;display: inline;}
    a {
        display:block;
        margin:auto;
        background-color: #2b8064; 
        color: #fff; 
        cursor: pointer;
        padding: 10px 30px;
        text-decoration: none;
        text-align: center;
    }
    a:hover {
        filter:contrast(99);
    }
    .desc {color:#333; font-family: 'Helvetica Neue', monospace;}
    h2 { margin: 0; color:#333; font-family: 'Helvetica Neue', monospace;}
    h2,h3 { text-align: center;}
    .enterprise > a { background-color: #db163e; text-decoration: line-through; }
    .box.enterprise  {border-top: 4px solid #db163e;}
    .box.team  {border-top: 4px solid rgb(34, 193, 200);}
    .box.team a {background-color: rgb(34, 193, 200);}
</style>