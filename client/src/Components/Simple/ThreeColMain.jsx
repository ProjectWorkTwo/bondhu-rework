import React from "react";
import RightSide from "../Complex/RightSide";
import LeftSide from "../Complex/LeftSide";
import { useMediaQuery } from "react-responsive";
import ScrollBar from "./ScrollBar";

const ThreeColMain = ({ children }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTab = useMediaQuery({
    query: "(min-width: 900px)",
  });
  return (
    <section className="w-full h-full bg-teal-900 overflow-hidden flex gap-5">
      {/* <div className="w-full p-4 overflow-auto">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          corporis modi temporibus nostrum illo quidem voluptates, magnam
          reprehenderit voluptas illum deserunt sequi velit consequuntur
          voluptatibus ullam officiis nemo tempora dolores dolore consectetur
          natus quis quas obcaecati pariatur. Sapiente commodi vel sunt ullam
          totam perspiciatis nam quibusdam voluptas quo autem. Laudantium fuga
          dolorem quibusdam sunt? Enim nemo dolorum, aspernatur asperiores
          numquam dignissimos, explicabo voluptatum porro odio maxime obcaecati
          ex cumque beatae, neque quo consectetur totam voluptatem sit libero.
          Inventore ab dicta laudantium, recusandae aut aliquid accusamus
          mollitia repellat tempore, laboriosam iste sapiente at porro
          consequatur eligendi veniam minus ipsa asperiores. Labore debitis
          nobis perferendis consequatur a, ipsum repudiandae id, optio ea
          ducimus odit molestiae eligendi deleniti corporis laboriosam rerum
          dolorem qui fuga consectetur commodi architecto similique ipsa quasi.
          Ut, error sit. Esse dolor inventore sequi maiores facere animi debitis
          ratione architecto ut nisi voluptates beatae quas rem laudantium
          numquam consequuntur aut, labore ex sunt assumenda, facilis suscipit,
          consectetur eum aspernatur. Cumque, est rem. Odio quaerat quisquam
          labore nam ea cupiditate minus omnis eum veritatis. In, maxime
          delectus sapiente nesciunt distinctio qui, repellat commodi aut sed
          animi deserunt doloribus veniam amet voluptate ex neque. Minima ad,
          odio totam, suscipit eum iste id repellat explicabo voluptas
          blanditiis provident repellendus rem iure. Id eaque sapiente voluptas
          exercitationem deleniti perferendis est, tenetur ut laborum, quae
          culpa provident labore odio dolor quas sed facere repudiandae deserunt
          ipsum maxime quam molestias qui fuga placeat. Deserunt nihil minima
          voluptas accusantium asperiores quasi, perferendis ducimus voluptates.
          Officiis dignissimos pariatur in voluptates veritatis incidunt
          temporibus debitis ex eveniet, repellat quas magni ut omnis est
          consectetur at numquam aspernatur dolor delectus, aliquam
          reprehenderit laborum repudiandae facere! Fugit, autem quod. Ut,
          cumque rerum, error magnam laborum sit architecto ullam laudantium
          libero soluta tenetur, deserunt eligendi inventore non exercitationem
          molestias voluptas in aliquam tempore corrupti. Amet hic perferendis
          delectus voluptatum consectetur suscipit maiores nesciunt nulla
          quaerat placeat! Nemo quaerat recusandae aperiam odit, iste sunt
          repellendus voluptas! Dolores placeat atque odio iste praesentium
          maiores debitis minus? Quis similique maxime itaque assumenda. Eius
          incidunt debitis officiis at esse repellat obcaecati iste enim,
          dolores natus amet temporibus maxime facere architecto libero fugiat
          eveniet suscipit. Aut enim nesciunt ipsa dolorem? Laudantium
          architecto similique tempore amet eum illum, rerum, aspernatur soluta,
          in deserunt enim impedit distinctio? Voluptatum officia delectus
          recusandae optio incidunt. Natus, voluptas itaque modi labore iure id
          doloribus aperiam. Explicabo, nobis est sequi neque hic commodi iusto
          omnis, rerum necessitatibus adipisci, corrupti pariatur nam dicta.
          Error dicta perspiciatis nihil ab, quisquam odit aperiam repudiandae
          ullam laudantium corrupti, unde mollitia nobis aut, omnis distinctio
          eius molestias sint voluptatibus alias. Sapiente id nihil quidem
          officia est ipsa deserunt non. Modi repudiandae tempora explicabo
          voluptatibus quasi alias consectetur totam ratione dolore? Sequi
          perspiciatis quas magnam nulla vitae adipisci dignissimos corporis
          amet minus! Cumque aut sunt illo modi doloremque similique, incidunt
          ullam quia. Dolor vitae mollitia culpa sit natus hic voluptatem ullam
          iste ratione. Recusandae neque facere error nobis magni dolorum, nihil
          magnam? Quos consectetur quam dolores voluptatibus fugit possimus!
        </p>
      </div>
      <div className="w-full p-4 overflow-auto">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod
          reiciendis ab maiores, recusandae excepturi aut debitis odio illo
          voluptatem dolor magnam cupiditate blanditiis veniam quas optio vel
          numquam earum hic! Odit, odio tenetur nam error autem quam amet
          deserunt laboriosam recusandae dignissimos dolores inventore unde
          mollitia iure tempore facilis ab adipisci similique suscipit ex
          accusantium! Aliquam doloremque nam eum. Harum, aperiam facilis
          pariatur, fuga exercitationem, quam optio repudiandae quod
          perspiciatis quia nulla officia iusto. Qui tempora, accusantium
          ducimus quasi dolorum, hic commodi inventore ad eos officia numquam
          animi repellendus. Accusamus a et laborum porro velit officiis dicta
          quae voluptates. Vel totam porro repellendus accusantium maxime eius
          odit voluptatem, reprehenderit quidem labore quia commodi id. Esse
          dolores perferendis beatae laudantium cupiditate dicta quia corporis,
          quas in deleniti vel ipsa, sunt soluta, nulla voluptate qui
          consequuntur exercitationem. Excepturi quod repellat tempora minus
          dolore. Omnis distinctio libero cupiditate reprehenderit. Fugiat ipsa
          voluptatem officiis aut non adipisci eum maiores rem quis voluptates
          omnis quam vero hic, iure eveniet sapiente quidem velit doloremque
          veniam magni cumque exercitationem laborum unde est? Perspiciatis
          corporis, repellendus possimus unde accusantium praesentium corrupti
          iusto ea perferendis repellat velit provident, saepe voluptatem,
          veniam itaque minus enim tempora sunt labore iure? Ab doloremque
          debitis in, eaque tenetur tempore laudantium! Accusamus, inventore
          vero quam magni omnis totam quibusdam! Veritatis, vero aliquid?
          Numquam sint perferendis assumenda. Dignissimos sunt, praesentium
          natus perspiciatis ratione excepturi fugit optio? Dolorem molestias,
          veritatis repudiandae itaque corporis fugiat, dignissimos vitae sequi
          veniam saepe quod ex deserunt rerum. Libero dicta animi eaque vero
          atque. Possimus velit deserunt assumenda expedita quaerat rerum
          repellat mollitia porro veniam excepturi aperiam facere sed optio
          dolores, ad in vero unde pariatur odio sapiente ipsam! Illo quam animi
          accusantium nihil. Facilis porro, modi debitis iste itaque
          voluptatibus libero. Iste porro debitis fugit dolore fuga culpa qui
          harum a repellendus explicabo deserunt esse, at nihil, nobis
          asperiores quos? Perferendis commodi minima eum molestiae repellendus
          temporibus? Odit, obcaecati. Quae consequuntur perferendis qui minus
          laborum optio dolorum, cupiditate voluptas molestiae natus sapiente
          aut, sit laudantium animi nesciunt sint explicabo recusandae provident
          quasi inventore. Suscipit, ad. Non ex, consequuntur fugiat adipisci
          minus enim asperiores repudiandae! Obcaecati cum esse numquam amet
          nesciunt modi inventore voluptatem reiciendis quae et. Dicta explicabo
          dignissimos impedit. Aliquam mollitia consequatur labore nesciunt,
          odio quas odit facilis expedita quisquam id nam blanditiis iure atque.
          Maxime consequatur magnam error vel totam, nulla consectetur tempore
          nisi quaerat magni debitis consequuntur. Perferendis deleniti, quo
          dignissimos illo repellat voluptatum cupiditate, ad illum similique
          ipsa, delectus nobis iusto recusandae corrupti corporis laboriosam?
          Neque nam obcaecati cupiditate exercitationem molestiae. Perferendis,
          reiciendis corporis! Vitae molestias fuga reiciendis, quibusdam
          maiores a, mollitia dolor esse quidem accusamus, eos nesciunt quos
          officia. Eos delectus culpa sequi, in magni fugiat harum sapiente
          architecto similique assumenda ex accusamus cupiditate iure id
          inventore quaerat aperiam nobis modi. Quo, officiis sequi temporibus
          nam cum illum, adipisci voluptates corporis quia ab cupiditate.
          Reprehenderit molestias deleniti commodi perspiciatis odit nesciunt in
          delectus deserunt eius saepe officiis recusandae, iure ex ab, at
          voluptas fuga. Totam explicabo assumenda nisi aliquam voluptate
          doloribus inventore ipsum cumque reiciendis dicta tenetur architecto
          sint repellat quasi facilis perspiciatis error saepe ipsa eum ex
          recusandae, aliquid fugiat? Commodi ducimus, architecto fuga tempora
          iste optio obcaecati eligendi error delectus voluptate pariatur ab
          ipsa non corporis iusto dolor rerum aliquam voluptatibus expedita vero
          animi rem iure. Ipsa dolor itaque natus corrupti sed, provident ex
          nesciunt porro eveniet quidem rerum suscipit sit incidunt laudantium.
          Culpa unde non totam temporibus officiis adipisci id consequatur
          quidem veritatis fugiat ducimus, accusantium inventore explicabo vero?
          Minus aspernatur enim voluptatem cumque architecto sint vel quidem,
          animi dolor quos fugiat maxime earum harum deleniti inventore ex.
          Beatae, nostrum quia nobis sapiente rerum rem veniam ratione pariatur
          cupiditate autem totam eius quam aperiam hic ex at nihil officiis
          voluptatem? Voluptatem illum in numquam provident alias nam cum ipsa
          corrupti saepe nulla voluptatibus sunt eligendi consectetur illo et
          dolores vitae, dolorum amet? Possimus debitis architecto quis non
          asperiores cum atque ratione quas quaerat optio, quia quam saepe
          dolores omnis soluta facere quod molestiae sequi, animi dolor
          expedita? Animi iste voluptatum accusamus officiis deleniti fugiat,
          deserunt assumenda iusto maxime cum placeat veniam vel veritatis
          mollitia dolorem ipsa alias id soluta quaerat, perferendis possimus
          sed minima blanditiis nesciunt! Suscipit vitae dolor error quis
          architecto blanditiis eaque minima at quae et cum ratione, voluptate
          ullam omnis nesciunt soluta quas aspernatur, repudiandae sapiente
          dignissimos. Fugiat dolorem dicta quaerat provident tempora in
          delectus architecto rerum perferendis ratione? Aliquam impedit
          explicabo alias nisi corporis repellat in at facere modi fugit placeat
          doloremque minus exercitationem odio vel, error reprehenderit neque
          assumenda dolore ab nulla. Pariatur soluta officia culpa vitae rerum
          possimus nulla repellat nam nihil neque numquam tempora cupiditate,
          minima libero laboriosam aliquid vel laborum ut facere! Earum modi
          facere ipsam ut ad, molestiae expedita magnam quam, optio architecto
          eius? Accusamus autem, natus quod, magni explicabo hic consectetur,
          impedit similique pariatur aliquam adipisci asperiores illum
          voluptatibus. At et accusamus tempora voluptatum rem nam facere,
          impedit doloribus quas explicabo recusandae, fugit unde similique
          quasi labore ab itaque inventore ipsum libero iste. Rem obcaecati
          doloribus cupiditate recusandae labore eum nam dolorem adipisci
          eligendi tenetur, maiores itaque fugiat ea, quod, possimus quisquam
          sit rerum consequuntur molestias veritatis. Reprehenderit fugiat eos
          ad praesentium impedit earum necessitatibus voluptates consequuntur
          modi nihil, nostrum mollitia autem. Optio distinctio aspernatur
          veritatis praesentium voluptates eius ipsam temporibus, porro
          consectetur libero consequatur accusamus minus officia! Veritatis
          quam, iusto odit, quas accusamus voluptatem explicabo aliquam mollitia
          ab minus doloremque dolorum incidunt sapiente eos perferendis
          voluptatibus, fugiat placeat ut. Natus maiores consequatur nisi
          cupiditate eum ullam. Quo eius unde dolor cum nesciunt cupiditate
          repellat? Animi blanditiis aliquid nostrum repellat hic, tempora omnis
          ipsam quis. Quam eligendi quis unde ad modi esse perferendis porro
          tempora in quaerat reiciendis nostrum vero, dolores quo, hic minima
          vitae repellendus totam delectus mollitia autem quisquam, explicabo
          reprehenderit voluptas. Ut doloribus consectetur deserunt! Nam dicta
          praesentium, maiores deleniti aut ratione nostrum maxime, eum
          consequatur illo fuga sunt quae nemo, velit laudantium enim unde
          delectus in error est voluptatum accusamus pariatur. Sequi sint
          assumenda dolores, dignissimos eaque fugiat error, laudantium
          repellendus molestiae ea laboriosam cumque maxime at in neque repellat
          nemo magni rerum voluptas vitae. Magnam voluptate aspernatur odio
          excepturi? Ratione dolor, porro, eum sint blanditiis labore accusamus
          tempore optio cumque a magni neque explicabo facere minus itaque
          excepturi ullam! Dolores itaque, dignissimos modi autem qui corrupti
          expedita nulla quam quis et harum cupiditate voluptatum ipsam eos
          officia sequi facilis adipisci quo voluptates ducimus eius provident
          illo. Aliquam tempore et blanditiis, reprehenderit ipsum velit
          quisquam voluptates deserunt facere minima, autem molestiae impedit
          quidem fuga nesciunt vero. Commodi aut possimus quo laudantium quaerat
          dolore adipisci dolores tenetur expedita quia ullam omnis, vitae atque
          provident minus officiis deserunt. A quos molestias eligendi, at amet
          repellendus consectetur, ex libero, rerum temporibus nisi quae dolore
          omnis sequi sint rem aut! Maxime nisi necessitatibus sed dolor eos
          consectetur, cumque quidem. Sed laboriosam, laborum voluptatum
          obcaecati at architecto sit neque dolorum mollitia ullam eveniet sunt
          doloremque consectetur fugit suscipit aliquam impedit labore sequi
          accusamus itaque est, minus cumque omnis error. Harum, rem voluptas
          eveniet debitis aliquid ipsa illo dolore molestiae at. Quod voluptates
          fuga quos maiores vitae aut harum voluptatibus quam corporis. Sequi
          quo at eaque eos aperiam perferendis sint ea atque quod? Illo,
          architecto voluptates! Ullam exercitationem, voluptatum enim
          consequatur animi ratione similique ipsa, adipisci quam, nam repellat
          harum doloremque autem praesentium dicta neque quas veniam distinctio
          dolores ab commodi magnam iure qui! Similique, dolorum. Esse ducimus
          quo optio, dolorum velit distinctio iste reiciendis facere nobis
          expedita! Voluptatem nostrum laborum rem soluta culpa cupiditate
          praesentium tempora adipisci mollitia dicta odio nulla ipsam excepturi
          quos qui alias, iste quas, amet eligendi deleniti numquam quasi
          incidunt fugiat sint! Adipisci blanditiis laudantium doloribus
          aspernatur nostrum? Iste omnis dolores recusandae ipsum dolorem
          molestias nisi modi reprehenderit ab ex quo magni autem, numquam
          ullam. Delectus autem nulla omnis hic maiores dolores eos non
          asperiores ducimus repellat excepturi cumque recusandae obcaecati at
          odit corporis necessitatibus officia quidem dolore suscipit, eaque
          fugiat amet veritatis sint? Harum ipsum laudantium eveniet. Accusamus,
          vero! Consequatur placeat aliquam perspiciatis et illum dicta enim,
          soluta commodi nihil at quod dolore voluptas ad! Placeat culpa nobis
          voluptatem! Rem possimus nihil incidunt voluptates aut nobis officia,
          commodi corporis illum sed laborum ipsam tempore cupiditate fugit,
          quod doloribus earum eum corrupti tempora quo dignissimos. Corporis
          unde laborum, architecto tempora maiores accusantium debitis placeat
          provident voluptate, adipisci alias enim nisi. Officia ab ex quae
          ullam! Saepe eius eos, esse recusandae unde necessitatibus natus
          quibusdam ipsum in. Fugiat ad, veniam laborum, praesentium
          exercitationem repudiandae eveniet sunt maiores totam doloremque quis
          dolorem accusamus, ut ea voluptates fuga temporibus inventore odit!
          Tempora eos facere tenetur minima! Incidunt, debitis minus quod a
          alias unde? Distinctio omnis esse reiciendis unde aliquid voluptas
          veritatis suscipit quo voluptates optio, debitis, doloremque atque
          sunt harum officia in? Dicta qui illum assumenda ipsam. Eos eius culpa
          nisi quod, possimus dolores illum necessitatibus quisquam asperiores
          neque non assumenda iusto, ratione id, porro distinctio reprehenderit
          tenetur alias sequi similique. Perferendis corporis ratione
          consectetur animi, quae accusantium minima nemo obcaecati
          voluptatibus. Reprehenderit eius cumque iure adipisci hic at accusamus
          ipsam eaque nesciunt mollitia, ab quibusdam iste quidem veniam
          sapiente. In aliquam eligendi delectus fugit praesentium a. Dolore
          error eius necessitatibus harum, saepe voluptatem aliquid sapiente
          odio incidunt, atque aut dolorum nihil facilis assumenda voluptate
          quas delectus? Excepturi voluptatem ab vitae, velit, deserunt nisi
          tempore eos, quibusdam vel pariatur quo eaque iusto culpa perferendis
          non minima sint porro deleniti inventore omnis veniam nulla? Ut alias,
          vitae temporibus molestias, eaque iste autem quisquam minima error
          nulla optio blanditiis ea reiciendis adipisci impedit quam, totam
          placeat id facilis excepturi? Voluptatem laborum voluptatum aspernatur
          vero qui sed magni consequuntur! Vel earum deserunt repellat
          praesentium quos voluptatibus rerum aliquid! Porro tenetur molestiae
          quibusdam corrupti perferendis ab eum corporis, accusamus tempora. Sed
          magnam voluptates, sequi iusto aliquid autem nesciunt ipsa odio quidem
          modi nobis iste ipsam voluptatum dicta velit porro nulla. Dolore,
          dolores obcaecati. Eveniet eum est architecto sapiente aspernatur,
          odio ducimus assumenda fugiat veritatis ullam. Incidunt quasi
          asperiores sint commodi reiciendis dicta quod reprehenderit at
          suscipit earum omnis saepe tempore minima labore, quisquam veritatis
          quam natus sapiente? Officiis, iusto. Officiis consequuntur numquam
          dolorum repudiandae dolores eius laudantium maiores alias cumque eos
          labore at voluptatem porro ab quasi non amet cupiditate minus
          explicabo praesentium, voluptates id deserunt facilis. Ipsum
          reiciendis ipsa sapiente quisquam minima tempora necessitatibus
          molestias? Nulla est maiores dolore mollitia ea quia quo harum magnam
          eaque illum consectetur a sint quaerat inventore, ipsam nam at,
          tempora aliquid magni dignissimos, ex ad quis quam! Explicabo minus
          voluptatibus est quisquam dolorum voluptas aperiam voluptatem nesciunt
          nam enim! Similique labore dolorum voluptate deleniti amet. Et laborum
          explicabo officiis sint molestias praesentium consectetur ratione
          mollitia quasi, nesciunt distinctio autem laboriosam porro deleniti
          non libero, eum qui doloribus. Ab quisquam dicta consequatur voluptate
          sunt non nobis dolores voluptatum provident corporis odio qui quam,
          mollitia omnis culpa cumque, esse dolor labore aperiam explicabo rerum
          nostrum vero ea. Rerum consequatur totam molestiae impedit vero
          consequuntur labore soluta! Culpa, quas earum perspiciatis corporis
          ipsam commodi eligendi architecto itaque veniam! Placeat, vitae
          deleniti. Doloribus corporis, repellat pariatur eius magnam ipsam
          recusandae, fugit laborum exercitationem velit reprehenderit
          repellendus aliquam impedit. Iusto beatae sequi rerum natus laudantium
          blanditiis possimus maxime distinctio dicta, iure molestiae quibusdam
          consequatur placeat rem eveniet officiis quasi labore laborum ipsa
          animi delectus. In nam explicabo corrupti veniam ipsum asperiores
          vero, facere repudiandae assumenda impedit veritatis excepturi
          consequatur neque, iure architecto at atque omnis. Ipsam praesentium
          ut itaque! Vitae veritatis eum cumque voluptatibus tempore
          consequuntur praesentium exercitationem facilis, itaque tempora nemo
          ducimus vero quia illum iure quidem id dolorum officiis molestias
          nobis. Tempore provident eligendi ratione recusandae sit, dolores eum.
          Temporibus debitis libero, soluta aliquam ad exercitationem nisi
          facilis, animi explicabo suscipit impedit tempora iste officia at
          nobis distinctio sequi alias beatae ea magnam corrupti obcaecati id
          nostrum et. Iure, nemo? Incidunt necessitatibus hic quo sed eius
          reprehenderit sint ratione, quia doloremque id rerum blanditiis
          accusantium, enim porro corrupti nisi vero libero maxime est. Deleniti
          quas aspernatur tempore. Nulla temporibus aliquid et quis. Aut, vitae
          accusamus sunt dolore beatae, consequatur voluptatem ut cupiditate
          quibusdam natus voluptatum pariatur molestias rem omnis similique
          sapiente veritatis perferendis asperiores a repudiandae, iusto quos
          error atque magni! Aut odit natus sed recusandae dolores, molestias
          culpa! Quam illo temporibus eius molestias atque ipsam ut perferendis
          odit explicabo eum sed hic eveniet ex beatae reiciendis, aliquid
          repellendus placeat quo dolores, animi sequi consequatur. Quisquam
          optio, doloribus consequuntur minus, harum hic molestiae error neque
          porro blanditiis voluptas officia dolorem cumque eum animi inventore
          perspiciatis itaque? Obcaecati velit sunt repudiandae aspernatur harum
          similique quis temporibus autem maiores incidunt, consectetur hic
          officia nemo libero, nihil ipsum suscipit at eveniet consequuntur
          sapiente possimus error reprehenderit maxime dolorum. Nam aspernatur
          autem eos quam laboriosam asperiores nobis, est amet architecto vero
          cumque sequi accusantium reprehenderit saepe aperiam ex? Vitae
          sapiente delectus eos mollitia nostrum, ex id dolorem dolor eveniet
          laborum earum quis cumque consectetur molestiae error labore, corporis
          eius. Modi enim harum voluptatibus aliquid fuga dolorem soluta non
          vero nihil aliquam? Molestiae debitis laborum, repudiandae tenetur, id
          error deserunt possimus eum, consectetur sed quae dicta voluptate
          fugiat dolores et molestias. Distinctio velit dolorum quia eius ipsam
          magnam quibusdam quo sit temporibus dignissimos ratione quisquam
          dolorem perferendis laboriosam assumenda tempora voluptatibus,
          eligendi ducimus. Reiciendis laudantium cupiditate id molestiae
          reprehenderit explicabo, libero, sunt rem et corporis ea delectus
          quisquam eius ipsum asperiores odio temporibus aliquam, quidem
          consectetur ad. Magnam iusto quis officiis natus aliquid deserunt
          quaerat ipsum eaque totam cupiditate, reprehenderit modi! Aliquam
          laudantium sapiente veniam sed quas. Perspiciatis voluptate blanditiis
          quod consequuntur consectetur! Incidunt nobis amet velit voluptatibus
          impedit aliquid ipsam. Ut, corporis nostrum rerum, minima quidem,
          nobis natus dolor eius nulla culpa vel! Veniam enim nisi commodi,
          impedit, quisquam necessitatibus laboriosam sit voluptatibus
          cupiditate animi, quas voluptas quod odio aliquid! Nobis molestias
          officia, quasi hic minima id rerum libero doloribus et ea deleniti ab
          voluptas aliquid assumenda sed quaerat totam ad expedita incidunt
          laudantium necessitatibus officiis perferendis. Explicabo, ipsum enim
          pariatur repellendus accusamus possimus iste maxime saepe nisi
          necessitatibus a quaerat quia sint, quas eligendi! Velit, mollitia,
          quas nostrum recusandae culpa rem reiciendis perferendis itaque neque
          unde quae, facere cupiditate omnis tempore fugiat beatae eius.
          Obcaecati magni eius quibusdam repellat vero sit dolore, alias ratione
          ipsa, quaerat temporibus omnis. Cupiditate, maxime reiciendis rerum
          incidunt itaque quae ullam repudiandae omnis labore a similique,
          voluptate dolores architecto. Iste voluptatum corporis ipsam
          repellendus odio eum sint totam beatae, quas commodi cumque ut
          exercitationem magni, id debitis! Perspiciatis obcaecati, asperiores
          rem laborum unde molestiae magni soluta corporis illum veritatis,
          temporibus amet facilis voluptatem ipsam cum atque sit ea fugit?
          Maxime cumque facilis molestiae fuga, laborum ut eos eaque id debitis
          doloribus nemo aliquid eveniet at nostrum similique illum amet natus
          incidunt minima officiis. Reiciendis quae veniam harum temporibus
          voluptatibus molestiae! Vel amet ut officiis, sapiente odit
          perferendis quod deserunt, esse voluptates consequatur nostrum
          reprehenderit ipsa dignissimos nam asperiores accusamus iure. Sapiente
          ipsum architecto atque aliquam id quae! Dicta ad soluta obcaecati illo
          error ab quod quisquam enim dolor excepturi expedita possimus
          deserunt, eum atque fugiat consequuntur. Doloremque beatae officia
          voluptatum ipsa nostrum exercitationem earum dolor cum minus neque,
          impedit, ullam reiciendis, minima ex iusto voluptates veniam libero
          illo tempore voluptatem odio quis sunt porro totam. Nihil rem, tenetur
          consectetur consequatur unde nisi earum adipisci nemo neque eos
          molestias possimus odio error quos itaque impedit ipsam voluptatum
          magni? Veniam, voluptatem nobis possimus beatae excepturi ducimus vel
          perspiciatis. Natus libero expedita veritatis saepe incidunt ipsam,
          velit odio tempora assumenda eos, a dolorum ab ipsum commodi obcaecati
          laboriosam, autem voluptatem cumque nisi? Corporis suscipit in id
          laudantium voluptate hic aliquid soluta, quaerat tenetur ratione dicta
          incidunt consequuntur debitis dolorum vel dolores, obcaecati illum
          distinctio laboriosam eos. Aperiam eligendi, tempore assumenda ut
          libero repellendus repudiandae magnam voluptatibus adipisci obcaecati
          voluptatem odit, perspiciatis iste tenetur consectetur error iure quae
          quos eveniet. Doloremque veniam, vero modi velit architecto suscipit
          sint ipsa. Mollitia cumque praesentium vero numquam sequi fugiat atque
          eos asperiores nesciunt quo, esse culpa rem eaque nam, pariatur
          aliquid voluptatum. Aperiam earum inventore, accusamus facilis eius
          laudantium dolore fugiat. Eum odio facilis sit inventore qui dolor
          iusto sint, architecto a ea. Tempore ad nemo ut hic eius itaque, earum
          aut eos necessitatibus in odit suscipit delectus animi assumenda qui.
          Neque nam, laudantium molestiae possimus eaque at distinctio fugiat
          provident. Deserunt saepe dolor explicabo ex in aperiam placeat
          mollitia minima consectetur quia sunt eos necessitatibus dicta numquam
          voluptatem odio maxime, quaerat libero! Ex praesentium vel eius beatae
          ipsam odit nam ipsum itaque minus, necessitatibus neque dolore aut
          quisquam ullam illum libero porro nostrum facere labore! Soluta
          incidunt sed at, quasi laborum architecto sint illum pariatur eaque.
          Consectetur consequatur error ullam officiis id distinctio omnis,
          ratione at impedit rerum ab laborum autem. Nemo aliquid, culpa nobis
          illo magni reprehenderit quo! Sapiente quos quasi enim accusantium
          quaerat, aliquid eaque deserunt libero ullam perferendis tempore
          doloribus culpa accusamus iste temporibus? Amet est sequi tenetur
          optio ipsum sit commodi tempora culpa iste laudantium repudiandae
          doloremque temporibus repellendus sint dolor, esse officia, qui
          numquam mollitia quaerat deleniti. Voluptatem tempore earum aliquid
          modi recusandae similique! Possimus ab iure aperiam tempore
          exercitationem enim, laborum doloribus sapiente sed facilis nihil quo,
          magni, autem earum quae minima facere eligendi dolorem maxime porro
          perspiciatis amet officia ad dignissimos. Modi, mollitia officia.
          Molestiae, iste dolore in similique odio iure ea voluptas animi omnis
          voluptatem velit natus tempora possimus, voluptatum quo ullam illum
          nostrum dignissimos veniam ducimus unde et nisi deleniti. Asperiores
          quaerat maxime temporibus similique ipsa ut cumque, tenetur impedit
          in? Quidem impedit asperiores aliquam corrupti dolorem deleniti
          officia, architecto libero eius delectus assumenda facere minus beatae
          sequi exercitationem repudiandae est quibusdam voluptatem. Aut id
          repellat corporis assumenda dolor perspiciatis! Alias quae impedit
          nobis nihil distinctio delectus, architecto non veritatis? Quidem qui
          beatae quisquam fuga esse maiores repudiandae ex optio, impedit fugit,
          doloremque, quasi laboriosam facere eius quas possimus illo. Eos nemo
          sit amet! Ullam aliquam fugiat delectus fugit, molestiae, consequuntur
          animi, modi quia earum ut beatae vero veniam molestias? Cumque quod
          nisi ad, deleniti eos eaque magni. Rem nemo voluptas quam voluptatibus
          suscipit nesciunt sequi sint molestiae quia mollitia, hic explicabo id
          adipisci soluta, earum sunt cumque, aspernatur aliquam illo totam
          laudantium dignissimos tempore numquam. Excepturi officia, eos
          suscipit, modi rem aut cumque non ratione tenetur earum molestias
          veritatis asperiores aspernatur! Est, tempore architecto voluptatum
          nobis at eaque. Explicabo unde labore, omnis aliquid placeat rem
          asperiores officiis ducimus reiciendis error, adipisci tempora
          quibusdam beatae doloribus accusamus, expedita modi a. Adipisci nulla
          vero ipsam accusamus. Reiciendis ab facere exercitationem aperiam eos
          qui, cum nihil molestias reprehenderit? Necessitatibus excepturi
          perferendis accusamus tenetur quo rem officiis labore, adipisci, animi
          neque reprehenderit illo. Veniam iste quae rerum nam, harum ex eum eos
          neque doloremque reprehenderit quas minus optio unde est illo nihil
          dolore illum excepturi? Sit nostrum consectetur perspiciatis pariatur
          deleniti ducimus minus quaerat doloribus quam illum ab eaque dicta,
          accusantium animi. Ipsa, quidem officia dolores asperiores optio
          nostrum eos, dignissimos ratione est aspernatur accusamus nam deleniti
          dolor maxime dolorum beatae reiciendis suscipit ipsam, illo facilis
          et. Autem numquam delectus asperiores tempora! Corrupti quisquam
          sapiente quasi laudantium hic vero animi aliquam accusamus quis,
          perspiciatis dolores assumenda molestias rem eveniet quas veritatis,
          culpa exercitationem illo recusandae dolorum veniam inventore. Facere
          consequuntur delectus, unde ea atque libero dolorem provident! Alias
          aperiam unde quasi amet odio dolore ex necessitatibus, cumque quam,
          optio deleniti magnam excepturi sit doloremque ad culpa corporis!
          Ducimus sed minima maxime optio consequatur impedit, iure veritatis,
          hic pariatur rerum quae sapiente ipsa provident. Dolore alias
          voluptates perspiciatis. Mollitia, expedita ea illo odit vitae neque
          consectetur quam deserunt distinctio assumenda accusantium excepturi
          rerum. Repudiandae officia, iusto similique nostrum itaque assumenda
          incidunt natus dolor temporibus asperiores error soluta eum labore
          doloribus molestias quibusdam ipsam id exercitationem. Exercitationem
          eius fuga, consequuntur est cum molestiae quia neque laudantium
          consectetur. Laboriosam deserunt eligendi obcaecati delectus, earum
          harum quaerat iusto expedita dicta explicabo odit fugit voluptatem
          distinctio hic facere iure debitis asperiores ad molestias ipsam
          tempora molestiae! Architecto placeat eveniet ut maxime corporis illo
          rerum aliquam animi, rem perspiciatis earum sapiente qui doloremque
          ipsum nostrum doloribus et fuga obcaecati temporibus tenetur eum. Hic
          iusto mollitia cum atque consectetur qui blanditiis quaerat veniam
          inventore. Molestias, est vero veritatis quidem fugit necessitatibus
          maiores. Vel quisquam aliquid, optio saepe consequatur a et quibusdam
          asperiores amet, repudiandae odio dolor iusto ad illum delectus
          dignissimos eum magni animi, cum eveniet. Quo perspiciatis cupiditate
          optio dolor esse possimus. Eligendi ipsa suscipit quisquam ducimus
          odio, deserunt doloremque delectus laboriosam omnis alias praesentium
          totam, animi necessitatibus hic beatae ullam doloribus, quasi quos
          quia labore incidunt. Deleniti beatae vitae quaerat placeat voluptas,
          ducimus praesentium nesciunt sunt sapiente. Veniam labore vel fugiat
          distinctio, obcaecati consectetur est pariatur facere nihil non ullam
          accusamus corporis quo ea reiciendis placeat sunt sed minus odit
          dolorum deleniti laudantium deserunt ipsum. Aliquam laborum optio ad
          nemo beatae. Natus quaerat, dolorem nemo ut delectus quas fuga
          molestiae vitae tempora architecto, commodi autem debitis iusto
          adipisci neque quae officiis eveniet modi, repellat nostrum non. A,
          fugiat doloribus! Amet blanditiis dolorem magnam tempora ea. Ducimus
          enim soluta nam dicta reiciendis at quae similique consequuntur nobis
          cupiditate explicabo esse eligendi magnam, harum cumque aperiam hic
          perferendis mollitia ipsum, corrupti voluptate modi architecto cum
          labore? Iure eius cumque maiores, quam molestiae minima nobis deleniti
          voluptatibus iste temporibus vero quo quibusdam explicabo pariatur,
          voluptas ipsa aliquam aut error voluptate inventore quisquam. Eaque
          vero tempore fugit, minima suscipit dignissimos animi totam odit
          accusamus quod temporibus magnam necessitatibus culpa unde aliquid,
          reprehenderit praesentium quas odio ratione, saepe incidunt!
          Cupiditate eligendi itaque aperiam et possimus. In quisquam tempore
          ipsum nisi numquam, quasi consequatur deserunt, consectetur facere
          autem architecto at incidunt amet iste, facilis eius corporis
          possimus! Similique sit quos delectus quasi quisquam velit expedita
          repellendus, deleniti, consequatur ullam corporis. Enim deleniti cum
          earum nulla, praesentium mollitia maxime impedit aperiam, ullam sit
          vitae quod incidunt, placeat dolores fugiat accusantium explicabo
          beatae nesciunt repudiandae quos. Reprehenderit, doloribus tempora
          laudantium beatae possimus itaque dolorem quam nulla incidunt ipsa
          officia, rem eaque exercitationem fugiat. Cum nihil aliquam sequi?
          Corrupti possimus, saepe aperiam sunt dolorem deleniti adipisci
          officiis optio qui iusto inventore doloremque, nihil error repellat
          aliquam sequi ipsam autem debitis expedita odit similique numquam
          laudantium necessitatibus repellendus. Molestias ullam tempore
          corporis quae, eveniet delectus culpa ut sequi quo voluptate porro
          explicabo expedita a, blanditiis aliquam voluptates esse
          necessitatibus repudiandae distinctio! Quas ex blanditiis nulla
          assumenda neque, vel placeat delectus fugit modi, odit amet numquam?
          Inventore possimus aliquid ea est vero molestiae vitae? Nam assumenda
          voluptatibus alias ex doloremque! Repudiandae minima deleniti nam illo
          enim cumque numquam, tempora dicta, quaerat ab, ipsa hic? Quod
          accusamus dignissimos consequatur id amet temporibus fuga praesentium
          laboriosam facilis optio, at delectus expedita deleniti quibusdam
          natus magnam eligendi quam sunt placeat tempore sit. Fugit
          consequuntur reprehenderit sit cumque excepturi labore, consectetur
          cupiditate officia, dolor nihil veritatis soluta quasi voluptates rem
          quae perferendis eius sed, perspiciatis error id aliquid voluptate
          minus accusamus quis! Reiciendis maxime fugiat omnis nisi ad dolorem
          quisquam, aliquam, minima aspernatur quia ut ipsum dolores illo veniam
          mollitia a odio, quos placeat velit rem eaque perspiciatis. Maxime,
          inventore sequi nihil eius saepe fugiat debitis quo alias adipisci
          ullam nemo aperiam aspernatur quod perferendis quae quia ea illum
          facilis exercitationem nulla. Saepe pariatur atque cupiditate officiis
          voluptatum ut perferendis. Laborum ex neque quisquam officiis! Maxime
          sint error voluptatum similique molestiae voluptates non ducimus,
          harum neque voluptate esse laboriosam atque, reprehenderit hic impedit
          vel, ipsa magni obcaecati voluptatibus tempore amet adipisci dolorum
          animi. Reiciendis, architecto, voluptas vitae ad consequuntur error,
          temporibus minus mollitia impedit molestiae ipsa dicta animi corrupti
          porro assumenda. Eveniet commodi numquam, tempore, voluptate
          praesentium explicabo facilis aut ipsam omnis neque corrupti, officia
          repudiandae tempora? Labore vitae ex doloribus deleniti voluptate,
          ullam fugiat facilis exercitationem, vel id sequi earum recusandae
          quam dignissimos? Omnis numquam excepturi quia corporis minima dolor
          molestiae neque dolorum? Iure architecto voluptatem quas, laborum
          aspernatur voluptas quasi ut soluta consectetur beatae adipisci
          assumenda quo iusto possimus earum, vel nobis quod sed praesentium
          illum numquam. Eaque, sint magnam quaerat, iure ullam debitis nihil
          amet voluptas earum eveniet neque doloremque incidunt ex itaque minus
          nulla error suscipit reprehenderit! Fugit sunt commodi ut soluta
          dolores vitae nesciunt modi labore sapiente minima obcaecati eos
          voluptas, quaerat ea incidunt neque repellat enim in unde id ab non.
          Obcaecati cum omnis voluptate. A corporis qui iste architecto
          accusamus mollitia ea! Quos ipsum eos praesentium quaerat. Iusto sunt
          perferendis, magnam illum a obcaecati nemo adipisci commodi repellat
          error repudiandae libero perspiciatis praesentium vel? Debitis hic
          odio est neque esse sit quia facere quos voluptatibus! Dolorem
          necessitatibus voluptatem enim asperiores. Qui explicabo nostrum
          cumque magnam repudiandae, unde odit numquam accusantium porro dicta
          impedit error. Explicabo nemo, obcaecati magni, necessitatibus,
          aliquid non veniam ratione repudiandae voluptatem soluta sunt! Rem a
          obcaecati minima sequi sit laudantium, dolore aspernatur recusandae ab
          perspiciatis hic harum cumque in quam nemo veritatis at minus quae
          laboriosam! Odio, nobis! Accusamus voluptatum, consequatur illum
          perspiciatis nulla blanditiis eius officiis sed adipisci
          necessitatibus explicabo, expedita ullam enim praesentium quos
          reprehenderit? Delectus magni odio modi assumenda, commodi corporis
          neque ducimus at tempore architecto et soluta! At laudantium vero esse
          magni possimus molestiae, sit est a, illum quam aperiam? Harum error
          sapiente, quia id, sint et dignissimos praesentium beatae, illum
          magnam quasi sequi atque voluptas. Nihil voluptas aliquam vitae iste
          provident eaque corrupti dolore eius sapiente, maxime fugit deserunt
          necessitatibus ut laudantium. Sint et cumque officiis cupiditate modi
          quo ratione veniam totam temporibus repudiandae deleniti rem dolorum
          blanditiis dolorem delectus ullam, nesciunt exercitationem nihil odio.
          Delectus officia nihil molestias maiores sunt vel, sint aliquam
          expedita, non blanditiis omnis sapiente obcaecati eligendi.
          Repellendus fuga sit sed nesciunt vero? Ipsum, corrupti sed.
          Necessitatibus qui vel totam consequatur labore alias corporis
          inventore deserunt ipsa voluptate quae deleniti voluptatem impedit
          officiis itaque at non odio nisi reiciendis, iusto laudantium
          delectus! Eius quasi nulla modi ad esse perspiciatis sunt quas
          sapiente ratione, consequuntur cumque quae, molestias voluptates
          eligendi deleniti aut accusantium reiciendis incidunt nobis magni
          repudiandae quidem nihil cupiditate? Ipsum fugit aliquid laborum rerum
          ratione deserunt cumque natus voluptates earum voluptatum, ex aperiam
          nostrum libero nesciunt quas consectetur facere voluptatem neque!
          Aliquid ea dolores assumenda illum sed mollitia esse beatae provident
          dicta molestias reprehenderit delectus ipsum animi ducimus harum
          earum, et magnam cum nemo, est obcaecati dolore perspiciatis vero
          accusamus. Illo sequi unde magni error tenetur qui laudantium cum
          deserunt dolores numquam aliquam, et vero nostrum adipisci alias ipsa
          quasi quibusdam minima. Odio atque magnam eius maiores necessitatibus
          dolorem ab exercitationem officia vitae quos quidem, itaque eos.
          Repudiandae adipisci cum illum dolores explicabo cupiditate omnis ipsa
          reprehenderit optio itaque sequi repellendus quisquam quia, animi,
          corporis suscipit deserunt iusto alias nisi impedit nesciunt eos fugit
          facere. Architecto, culpa enim? Quas tempore accusamus esse deleniti
          saepe voluptatibus sint amet, excepturi velit ducimus doloremque alias
          at tempora officia deserunt quasi cum expedita atque ullam labore.
          Tempora possimus accusantium nesciunt voluptate amet! Nostrum eveniet
          dolore, suscipit, assumenda dolores quod ipsam quae et asperiores
          deleniti sit natus tenetur laudantium minima molestias. Corporis cum
          debitis accusantium adipisci possimus inventore, dolorem fugit
          pariatur eveniet dolores eos quas et veniam temporibus non distinctio
          saepe totam sequi magni impedit accusamus maiores nobis odit! Dicta
          voluptas enim repudiandae consequuntur deserunt praesentium
          necessitatibus, ipsum laudantium consequatur, natus quisquam libero
          ipsa provident harum, sit tempora reiciendis nulla animi eos
          temporibus culpa amet tempore perspiciatis atque! Amet voluptatem
          animi at ducimus. Necessitatibus repellendus aspernatur doloremque.
          Nulla eum, veritatis eveniet quia doloribus atque maxime, tempore
          voluptas porro, dignissimos nihil corrupti totam tenetur laborum earum
          fugiat ipsam. Sint, assumenda ullam officia facilis odio adipisci,
          excepturi dolorum rem reprehenderit quo fugit! Laborum dolorum vero,
          molestias quia odio sit praesentium distinctio. Deserunt, aliquid
          voluptates aspernatur suscipit autem vel, sed odio facilis mollitia
          saepe consectetur et quibusdam quasi tempore. Aspernatur voluptates
          deserunt odit, odio, officia suscipit earum error corporis illo, a
          molestiae. Suscipit, quidem totam doloribus perferendis at quos hic
          molestiae rem. Fugit, eos? Possimus, dignissimos. Laudantium ad, minus
          distinctio officia sapiente, saepe odit molestiae tenetur perspiciatis
          eum illum fugit sint ipsa maiores doloremque necessitatibus. Ab
          repudiandae, alias nam esse doloribus reiciendis possimus voluptatum
          fugiat consectetur neque aliquam ipsam facilis dolorem porro dolorum
          cumque recusandae explicabo vel. Eaque rem alias similique deserunt
          ducimus aliquam animi repudiandae dolore debitis recusandae sit,
          eligendi ipsum cumque tempore dolores velit repellendus obcaecati ex
          aspernatur modi molestias dignissimos libero magni. Numquam sapiente
          cupiditate accusamus beatae culpa unde atque iure! Harum, dolorem ipsa
          nulla, omnis voluptate error ducimus dicta fuga voluptas, odio
          mollitia non? Dolorem, accusantium incidunt, tempore pariatur sit,
          deleniti autem quam doloremque eligendi rem laborum eos! Eum officia a
          minus excepturi eveniet omnis tenetur rerum quos ullam, praesentium
          adipisci placeat nemo corrupti laborum porro recusandae incidunt
          perspiciatis, ut quisquam deserunt ipsam aut consectetur. Natus eos
          similique aut aperiam saepe assumenda voluptate eligendi quisquam
          fugiat a, soluta autem ducimus ratione culpa libero incidunt deleniti
          at officiis accusantium, repellat placeat eaque vel. Recusandae
          explicabo amet fuga ipsa quas vero quisquam blanditiis, ea enim fugit
          distinctio? Numquam sequi facere dolores quam rem neque soluta iste
          eaque nulla ex qui sapiente eos, libero similique itaque id fuga quasi
          cupiditate saepe perferendis. Exercitationem, harum nesciunt tempore
          omnis vitae consectetur reiciendis ab quae laborum eveniet. Amet odio,
          hic tempora, beatae aut odit sequi libero maxime culpa nulla
          voluptates vitae nesciunt dolores. Maiores assumenda unde delectus
          asperiores ipsam, incidunt fugit quisquam repellendus cupiditate,
          maxime laboriosam dolor doloribus saepe. Voluptatem deleniti
          repudiandae minima rem molestias enim nisi magnam, voluptates illum
          eaque amet itaque blanditiis! Explicabo, at esse doloremque aut
          ratione necessitatibus? Quia et totam eligendi, unde, exercitationem
          optio officia repellat aliquam sed maxime praesentium a fugit non
          minima in laborum error magni porro. Quaerat, consequuntur minima cum
          esse culpa dignissimos quidem ullam inventore repellendus consequatur
          eum deserunt ab. Nulla non quidem nostrum natus voluptatum sed aliquid
          culpa sunt harum? Neque quas perferendis perspiciatis sed cupiditate
          quidem necessitatibus temporibus incidunt eum suscipit. Similique nemo
          quo ab culpa dicta possimus explicabo animi? Quidem veniam similique
          hic omnis laborum ex qui quaerat cupiditate enim vitae repellat
          architecto reiciendis, quas distinctio. Nisi.
        </p>
      </div>
      <div className="w-full p-4 overflow-auto">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quidem
          inventore ad expedita. Sit vel sed necessitatibus nobis velit harum at
          soluta, obcaecati tempora est blanditiis alias atque, repellat,
          perspiciatis magni mollitia earum. Veniam nam esse, ratione accusamus
          corporis blanditiis animi repudiandae dignissimos pariatur sunt at
          quaerat est quasi in aut laboriosam, aperiam eius iure illo facere
          laudantium nulla. Labore dolores consequatur aperiam ipsum doloribus
          voluptatum aliquid adipisci expedita molestias placeat dolorum maxime
          illo obcaecati nisi architecto voluptatibus assumenda, nobis, quam
          tempora? Distinctio praesentium perspiciatis eaque excepturi
          aspernatur, quos magni dolorum totam ducimus reiciendis expedita
          deleniti culpa vitae, saepe recusandae? Deleniti fugit repudiandae ut
          quidem nostrum? Corrupti nemo ipsum autem, sint unde at obcaecati
          corporis doloremque ducimus asperiores, eaque pariatur natus, odit
          porro explicabo sapiente excepturi aliquid praesentium ad libero
          necessitatibus voluptatem! Dolores nulla aut quibusdam tempora. Quae
          totam hic, culpa veniam in velit commodi expedita facilis id deleniti
          fuga delectus facere fugiat nihil tempore placeat, at eum nemo
          voluptatem! Sapiente magni similique deserunt aliquid distinctio ex
          dicta eius fugit aspernatur voluptatum soluta tempora dolore sunt enim
          aliquam itaque ipsa sequi veritatis minus laborum culpa, dolorem eos.
          Cum voluptates aut veniam magnam tenetur est repellat id laudantium,
          voluptatem assumenda a porro, odit sit optio tempora. Rerum, cumque
          enim nostrum, labore dolore fugit quod obcaecati nulla beatae voluptas
          aperiam voluptates dolorem. In, nisi rem quos vitae consectetur esse
          minima ut culpa quibusdam dicta accusantium illum cum repellat debitis
          eos nemo veritatis earum quas illo ipsum eum ea. Ex fuga repellendus
          praesentium cumque provident deleniti fugiat iure tempora aliquid.
          Possimus tenetur odit neque inventore beatae explicabo, labore eius,
          adipisci assumenda corporis autem a quibusdam quae aperiam nesciunt
          architecto culpa libero exercitationem voluptates soluta cumque
          similique illum! Ab facere incidunt repudiandae vitae laboriosam autem
          totam alias? Quidem nihil odio commodi consequatur iure, quisquam amet
          corrupti debitis quis molestiae architecto enim veniam rerum id ex, in
          ad, totam labore sunt facere sed aspernatur. Laudantium totam vitae
          incidunt accusantium iste suscipit necessitatibus, consequuntur
          corporis corrupti ab impedit quisquam deleniti itaque ullam laborum!
          Adipisci alias atque eaque ullam doloremque unde officia id velit,
          vero ab dolorum sapiente molestiae, modi nesciunt iusto animi magni
          fuga ipsum, repellat culpa maiores commodi. Atque aperiam culpa
          molestias blanditiis. Autem voluptas nihil aliquam minima officia, ab,
          eius sequi consequatur deleniti, quia placeat amet saepe laboriosam
          impedit tenetur natus provident sed blanditiis? Iure laborum cum alias
          omnis suscipit nulla quam, labore dolores accusantium consectetur
          aspernatur quis neque libero. Quos officia harum, magni quae tenetur
          illo minus soluta doloribus iusto omnis ipsam repellat inventore
          labore, eaque quasi sint corporis debitis. Temporibus iure ducimus,
          esse molestias sunt earum eius! Voluptatum, nihil molestiae sit
          pariatur recusandae nobis quam facere ipsam! Numquam nesciunt eligendi
          tenetur qui, sint expedita officia repudiandae ab, voluptate
          necessitatibus minima culpa, dolor unde sed beatae cumque dolores
          quibusdam suscipit nostrum harum at quasi quod maxime corrupti. Ex
          tempore suscipit doloremque nam amet nobis deleniti numquam aliquid,
          quae est nisi expedita debitis repudiandae ducimus eaque facilis rem a
          dicta veritatis quam laudantium. Soluta?
        </p>
      </div> */}
      {isTab && <LeftSide />}
      {children}
      {isDesktopOrLaptop && <RightSide />}
    </section>
  );
};

export default ThreeColMain;
