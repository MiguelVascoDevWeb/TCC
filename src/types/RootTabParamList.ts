import { NavigatorScreenParams } from "@react-navigation/native";
import { EnergyStackParamList } from "./EnergyStackParamList";
import { WaterStackParamList } from "./WaterStackParamList";
import { TrashStackParamList } from "./TrashStackParamList";

export type RootTabParamList = {
  Home: undefined;
  Energia: NavigatorScreenParams<EnergyStackParamList>;
  Água: NavigatorScreenParams<WaterStackParamList>;
  Lixo: NavigatorScreenParams<TrashStackParamList>;
  Poluentes: undefined;
};