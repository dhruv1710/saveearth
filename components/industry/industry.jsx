import styles from './industry.module.css';
import Image from 'next/image'


var cells = [
    {'hr':true,'name':'water','desc':'When goods like steel get produce their byproducts are smoke which gets released into the air polluting the environment. Measures can be taken to reduce this polllution by using elctricity powered furnaces. '},
    {'hr':true,'name':'const','desc':'Construction leads to dust which is released into the air this dust is alson known as particulate matter and affects our health. When this particulate matter enters our respiratory system it can cause cough and bronchitis.'},
    {'hr':false,'name':'factory','desc':'Chemical waste released by production is released into water bodies which pollutes our marine ecosystem. Fisheries is impacted and fresh water is contaminated which affects our daily life. Examples are Varthur lake foam and Bellandur lake fire.'},
]

export default function Industry(){
    return (
        <div className={styles.rootI}>
            <div className='w-full bg-white h-24 flex justify-center items-center text-4xl text-black'>Industrial Waste</div>
            <div class="flex flex-col justify-center items-center">
                {
                    cells.map((val)=>(
                        <>
                        <div class="flex justify-evenly items-center w-full"><Image src={`/images/${val['name']}.jpg`} alt="water" width="200" height="200" /> <p class="text-black w-96">{val['desc']}</p></div>
                        {val['hr']?<hr class="w-3/4 h-1 bg-black m-10"/>:<div></div>}
                        </>
                    ))
                }
            </div>
        </div>
    );
}