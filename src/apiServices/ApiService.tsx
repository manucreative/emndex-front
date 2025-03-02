/* eslint-disable @typescript-eslint/no-explicit-any */
import API from "../utils/api";

export interface FeaturesData {
    success: string;
    message: string;
    error: string;
    data: GetFeaturesData[];
}

export interface GetFeaturesData {
    feature_title: string;
    feature_short_description: string[];  // ✅ Fix this line
    feature_full_description: string;
    feature_icon: string;
    feature_image: string;
}
export const fetchFeatures = async (): Promise<FeaturesData> => {
    try {
        const response = await API.get("/getFeatures");
        console.log(response.data);
        return response.data;
    } catch (error: any) {
        console.error("Failed to fetch", error);
        return { success: "false", message: "", error: error.message, data: [] };
    }
};