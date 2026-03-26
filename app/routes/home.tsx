import { Header } from "~/components/Header";
import { Paragraph } from "~/components/Paragraph";

export default function Home() {
  return (
    <div>
      <Header>Welcome to Remix Recipes</Header>
      <Paragraph>
        This is a collection of recipes to help you get started with Remix. We
        have recipes for everything from authentication to testing to
        deployment.
      </Paragraph>
    </div>
  );
}
