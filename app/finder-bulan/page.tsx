"use client";
import FullScreenMobileView from "@/components/fullScreenMobileView";
import {AzimuthAltitudeCalculator} from "@/components/azimuthAltitudeCalculator";
import { DeviceOrientationChecker } from "@/components/directionOrientationChecker";
import { moonPosition } from "@/components/moonPosition";

export default function FinderBulan() {
  return (
    <div>
        <FullScreenMobileView></FullScreenMobileView>
        <AzimuthAltitudeCalculator></AzimuthAltitudeCalculator>
        <DeviceOrientationChecker></DeviceOrientationChecker>
        <moonPosition></moonPosition>
    </div>
  );
}
