"use client"

import Navabr from "./components/navbar";
import Hero1 from "./components/hero1";
import Hero2 from "./components/hero2";
import Footer from "./components/footer";
import { useEffect, useState } from 'react';


export default function Home() {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <>
      <div id="par" className=" bg-red-500 p-20 flex gap-4 flex-col  h-screen">
        <div className="nav"style={{ transform: `translateY(-${scrollPosition * 0.5}px)` }}>
          <Navabr />
        </div>
        <div className="flex gap-4  flex-row">
          <div className="hero1"style={{ transform: `translateY(-${scrollPosition * 0.2}px)` }}>
            <Hero1 />
          </div>
          <div className="hero2"style={{ transform: `translateY(-${scrollPosition * 0.7}px)` }}>
            <Hero2 />
          </div>
        </div>
        <div className="footer" style={{ transform: `translateY(-${scrollPosition * 0.9}px)` }}>
        <Footer />
        </div>
      </div>
      <div className=" bg-red-500 content m-10 text-white">
        Lorem ipsum dolor, sit amet conseckkkotetur adipiksicing elit. Fuga nisi quia id sint quae, iusto accusamus consequatur quis libero mollitia, quas doloremque aliquid, sequi impedit suscipit dolor soluta recusandae dignissimos. Ullam magni magnam, voluptas ipsum labore ipsa quis! Voluptatibus iure provident et fuga ea, qui iusto, reiciendis quo labore, atque quidem repellendus deserunt incidunt expedita architecto neque animi veritatis necessitatibus eos quia praesentium molestias? Quos ipsum debitis voluptatibus sed aliquid voluptates accusantium aut sequi aliquam optio quo odio maiores corrupti placeat ipsa reiciendis nisi quod, illo laudantium corporis molestias beatae libero suscipit. Eos tempora cum eum provident quaerat, nulla, sint aspernatur excepturi iure fuga velit nesciunt modi minus eius doloribus quas repellendus. Ea corrupti a saepe optio atque ipsa ut expedita, suscipit commodi facilis minima mollitia illum quasi dolorum quam, harum, quia similique officiis eos unde alias libero iste reprehenderit! Aspernatur voluptatibus tempora quae beatae perferendis exercitationem quidem. Accusamus, at in, dolore alias reiciendis quod fugit sed distinctio labore rerum neque harum, iste debitis corrupti quis facilis? Architecto, quasi consectetur. Autem esse deserunt est placeat quisquam iste tenetur tempore quas saepe praesentium! Eius quae doloremque, molestias tempora nesciunt expedita harum soluta alias. Iure ipsam facere pariatur non perspiciatis blanditiis consequuntur cum exercitationem laboriosam maxime vero ducimus saepe cumque debitis, harum architecto asperiores? Minus unde hic sed nisi dolorum quam nulla rerum aut, laudantium voluptatem natus. Earum, neque veritatis dignissimos dolorem quos culpa accusantium nesciunt quae doloribus natus esse voluptatem nulla atque velit doloremque vitae quisquam sequi alias in suscipit id. Ducimus voluptate architecto obcaecati praesentium accusamus recusandae molestias cum optio, aspernatur nesciunt quidem non! Nemo beatae ad laudantium esse at ab atque voluptas praesentium assumenda architecto quis autem totam incidunt, excepturi ducimus alias similique a laborum maxime id iure possimus sint explicabo? Earum vero eaque expedita assumenda aliquam repudiandae sunt. Suscipit delectus magni nobis. Inventore assumenda repellat quos excepturi nihil mollitia sit obcaecati exercitationem voluptatem optio doloremque alias voluptate accusamus nostrum facilis laborum libero, rem maxime voluptatum? Enim libero quaerat culpa eos natus iure! Amet exercitationem eos delectus corrupti, cum fugiat doloremque in! Eaque, enim explicabo error sequi eveniet saepe unde molestiae voluptates velit quo voluptatum, repellendus culpa hic ea id consectetur tempore dolorem earum odio alias dicta laborum ducimus. Error aut quasi laudantium corrupti velit ab expedita, vero possimus molestiae excepturi iusto earum accusamus voluptates, laboriosam cupiditate. Ad, commodi ducimus, rerum laudantium recusandae sunt nesciunt, similique praesentium beatae in totam. Quidem at facilis assumenda nam sequi aut, molestiae aperiam sint enim temporibus! Delectus eligendi aliquam quo illum harum? Quae culpa adipisci mollitia architecto voluptas nisi! Laudantium quos veritatis consequatur non quo eos voluptatibus saepe, dolores autem consequuntur cum quam, vel nobis architecto in enim natus ipsam similique ratione sunt libero tenetur. Dolorem, est? Fugit illum alias, eius quidem nam aspernatur labore animi necessitatibus nesciunt reiciendis praesentium ex tempora voluptatibus non assumenda omnis iure laboriosam tenetur sint ipsum doloribus. Vitae labore dignissimos, corporis ut vero architecto odit impedit! Nesciunt ullam esse laudantium eligendi adipisci perferendis laborum in, doloribus nostrum labore voluptates soluta provident. Ipsum recusandae culpa iusto, magnam, eaque accusamus nemo fugit quasi esse cumque, tempore ratione voluptatum. Iure dolores aut nostrum. Quo voluptatum et, nisi eos necessitatibus voluptatem ea architecto in odio id deleniti similique totam est iusto ratione ipsum corrupti dignissimos neque eius distinctio excepturi quia asperiores magnam? Provident quibusdam voluptatem cum velit placeat perferendis quidem facere eius doloremque accusantium quis, exercitationem possimus dolorem voluptatum, voluptates, laudantium deserunt similique. Ab accusantium rerum debitis voluptates ex itaque quisquam suscipit expedita, porro est labore minima. Officiis eligendi vitae earum ea aut quasi omnis doloribus, temporibus at quisquam libero eaque inventore excepturi eveniet iusto quidem porro? Sunt, reprehenderit qui blanditiis ipsam, explicabo aperiam quidem amet non sequi nulla molestias sed voluptatem sapiente deleniti numquam corporis officia temporibus iure est fugiat perspiciatis. Reprehenderit maxime non suscipit consectetur laboriosam velit distinctio possimus officia odio, error rem quod cum iure placeat quisquam pariatur excepturi corporis, hic nam molestiae fugit laudantium qui sunt et? Est voluptas, ipsam sit sequi a inventore nesciunt iure maiores harum laudantium repellat repudiandae consequatur cumque, minus animi nisi error commodi incidunt voluptatem. Ut, laboriosam officiis voluptatum culpa iusto nobis! Quo libero cumque illo fugit ipsam, possimus voluptatibus quibusdam necessitatibus porro corrupti aperiam, blanditiis repellendus impedit! Sint dolore iusto delectus commodi cupiditate sed reiciendis, sapiente vitae quod architecto dolores nulla recusandae et perspiciatis exercitationem molestias unde numquam quasi sequi. Dolorem, aperiam velit facilis cum aliquid voluptatum quia mollitia, non laborum odio omnis, inventore sit perferendis reprehenderit! Culpa odio natus, vel adipisci optio molestias temporibus ad architecto labore nihil, non cum officiis eum eos pariatur, aliquid at dignissimos debitis! Ratione voluptate fugiat in nostrum amet nam repudiandae. Quae id reiciendis eveniet ipsam quasi beatae, unde omnis, veniam tenetur, magnam distinctio incidunt sint atque alias veritatis perspiciatis quos! Ullam ad eligendi cumque omnis eius ab recusandae similique enim reiciendis quia magnam non quidem, aspernatur quasi in tempora dolorum fugit necessitatibus. Consequatur incidunt blanditiis tempore voluptas voluptates hic sint placeat sequi quasi! Rem eaque exercitationem ex, itaque delectus nemo quibusdam cumque vero ad? Quas inventore corporis doloribus quidem. Assumenda, eaque. Alias tempora autem excepturi magnam eaque minus unde ducimus, animi debitis, aspernatur tempore! Alias quisquam, sapiente autem eveniet totam molestiae minima sed pariatur neque illo voluptate corrupti aperiam inventore consequatur quidem iure aut voluptates ut soluta! Dicta magnam consectetur eveniet pariatur porro excepturi nulla corporis ratione quam expedita dolore ipsam animi dolores, incidunt voluptatem!
      </div>
    </>
  );
}
