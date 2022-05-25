import { Text, Image, Grid, GridItem } from "@chakra-ui/react";
import { TravelType } from "./TravelType";

export function TravelTypes() {
    return (
        <Grid
        w="100%"
        maxWidth="1160px"
        templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
        gap={4}
        my={20}
        mx="auto"
      >
        <GridItem>
            <TravelType icon="/icons/cocktail.svg" text="vida noturna" title="Drink" />
        </GridItem>
        <GridItem>
            <TravelType icon="/icons/surf.svg" text="praia" title="Prancha de surf e sol" />
        </GridItem>
        <GridItem>
            <TravelType icon="/icons/building.svg" text="moderno" title="Prédio" />
        </GridItem>
        <GridItem>
            <TravelType icon="/icons/museum.svg" text="clássico" title="Museo" />
        </GridItem>
        <GridItem colSpan={[2, 2, 2, 1]}>
            <TravelType icon="/icons/earth.svg" text="e mails..." title="Globo da terra" />
        </GridItem>
      </Grid>
    );
}