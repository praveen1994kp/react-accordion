import React from 'react'
import styled from 'styled-components'

import { Accordion, AccordionHeader, AccordionContent } from 'react-accordion'
import 'react-accordion/dist/index.css'

const StyledContainer = styled.div`
  max-width: 60rem;
  margin: auto;
`

const StyledBlock = styled.div`
  background: rgba(2, 30, 40);
  height: 10rem;
  width: 30rem;
`

const App = () => {
  return <StyledContainer>
    <Accordion>
      <AccordionHeader id='test'>Testing</AccordionHeader>
      <AccordionContent>
        <h2>Gotcha!</h2>
        <StyledBlock />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, totam perspiciatis autem sunt iste tempore, voluptas at odit nulla consequuntur repudiandae a magni nesciunt laboriosam deserunt labore esse ab rerum error inventore sapiente culpa? Rem esse ut praesentium impedit perferendis ex, beatae natus nostrum explicabo labore maiores voluptates cumque vel incidunt dolor odio cupiditate consectetur alias dolore quia nam temporibus. Atque expedita rerum temporibus adipisci natus maxime omnis, amet consequatur iusto modi doloremque perferendis a, sit, est necessitatibus ipsum. Error quam reprehenderit, asperiores aliquam quibusdam adipisci incidunt provident sequi libero, quas ex temporibus optio ab laboriosam, earum veritatis fugit eligendi perferendis vel quidem at sint impedit. Provident quisquam exercitationem cum magni doloremque assumenda cupiditate aut maiores totam porro rem repudiandae itaque, at corporis iure molestias necessitatibus ea distinctio excepturi modi, ipsum, autem inventore! Facere id minima est dignissimos aliquam omnis ratione nulla repellendus iure sit blanditiis deserunt consequuntur expedita ea assumenda magni consectetur doloremque, architecto deleniti placeat. Est qui odit facere quisquam, obcaecati fuga quaerat! Error dolore illo asperiores itaque. Repudiandae at itaque illum exercitationem vero tempora ad perspiciatis, neque provident inventore nostrum ullam impedit nesciunt dolorum ea mollitia quod laborum dolor quia quibusdam nihil. Sapiente dolor ex obcaecati nam unde dolorum? Ratione quia quaerat impedit cumque quo eaque, explicabo ullam officia! Dolorum tenetur quibusdam hic. Quam esse neque unde beatae quos sequi veritatis placeat facilis expedita possimus nesciunt vitae eligendi asperiores iste facere mollitia magnam, vel nemo quod voluptatum commodi minus. Magnam voluptatibus, iusto ipsam esse earum numquam optio rem nobis. Animi eius pariatur quas natus nemo fuga! Hic cum recusandae tenetur sed perferendis aut provident fuga! Voluptatibus odit quae aperiam qui labore optio, quaerat, beatae atque, quisquam tempora est eligendi molestias nesciunt nostrum velit explicabo! Ratione, mollitia, nisi perferendis quas aut repellendus maxime facere suscipit vitae fugit odit quae eligendi dolores necessitatibus esse. Id incidunt porro nam quis mollitia asperiores reprehenderit molestiae sit quisquam eum animi illum modi consectetur sed laboriosam, tempora sint illo assumenda amet deserunt dolorem eveniet culpa eius. Ipsa natus, laboriosam, nisi porro necessitatibus officia quasi sit, nesciunt commodi beatae dolor! Velit, dolor nemo id labore sunt sint amet modi dolore, vero minus pariatur ipsam incidunt eveniet reprehenderit officia corporis omnis rem? Aliquam error blanditiis, aperiam voluptatum ipsum fugit veniam tempore inventore illo assumenda ducimus, a repellendus ex quo fugiat aut praesentium maxime corporis! Quis, ducimus ipsam ab et natus consequatur nihil corporis dolor corrupti maxime facilis eum neque molestias, a hic asperiores aspernatur quisquam autem inventore quae soluta dicta nisi. Quisquam debitis atque minima recusandae molestiae pariatur modi, iusto voluptatum quidem quas nemo delectus! Dolorem, illum id harum nostrum excepturi repudiandae minus quasi eligendi deserunt itaque fuga laborum impedit deleniti beatae fugiat dignissimos illo ratione. Dolor iusto magnam quasi consequatur repellendus ut accusamus nisi, minus ex laudantium quaerat deleniti! Itaque molestiae unde dignissimos expedita cum molestias velit, numquam omnis neque soluta quas repellat eveniet a maiores quidem consequuntur debitis libero repudiandae, aperiam quam temporibus! Architecto assumenda voluptatibus illum impedit voluptate hic? Adipisci, animi deleniti!</p>
        </AccordionContent>
    </Accordion>
  </StyledContainer>
}

export default App
