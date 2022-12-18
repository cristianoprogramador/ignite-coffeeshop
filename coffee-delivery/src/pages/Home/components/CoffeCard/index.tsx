import { RegularText, TitleText } from "../../../../components/Typography";
import {
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1672012800&Signature=YDapFjre3gu29Fu5p9nkBPLUTSj9IHcpeQsBMj5QeRrpnqMo4nsfTPrfJ12aN~TwwgQN36Ow2EAWfOAFqBhYWRoHMOIm2suAdDsC7mBQ7dPG1UhnithZ2CSaPpXrE9STYTck827odBAplS24TS8~aoHPJkEY48jOiYklRBvZfTUy75J20TxlXpYzmmy-DeVQjjl7wCcV1a7AbMJDDei5kUemeCsppBneAnJ8tbKinvy~ONmbmQGeDPuRS0on11h0~W7vzwJya2CmNrEQ5k48GJnuIYm5FW-Qmuup2PPVHFct6vOhS9lsA6AomTvBI6eii85DbbWCTYeNsRb1BrV43A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

      <Tags>
        <span>Tradicional</span>
        <span>com leite</span>
      </Tags>

      <Name>Expresso Tradicional</Name>
      <Description>
        O tradicional café feito com água quente e grãos moidos
      </Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            9,90
          </TitleText>
        </div>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
