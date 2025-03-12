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

interface ConfigResponse{
    data: object
}

export const getConfig = async (): Promise<ConfigResponse | null> => {
    try {
      const response = await API.get<ConfigResponse>("/configurations");
      return response.data;
    } catch (error: any) {
      console.error("Error fetching configurations:", error);
      return null;
    }
  };

  export interface ServiceResponse {
    success: string;
    message: string;
    error: string;
    data?:{
        id: number;
        service_title: string;
        slug: string;
        service_short_description: string;
        service_full_description: string;
        service_image: string;
        service_icon: string;
        service_starting_price?: string;
        status: string;
        created_at: string;
        updated_at: string;
    }
}

export const fetchServices = async(): Promise<ServiceResponse[]> =>{
    try {
      const response = await API.get("/getServices");
      return response.data;
    } catch (error) {
      console.error("Error fetching services:", error);
    return { data: [], message: "Error detching Services"};
    }
}

export interface ProjectResponse {
  success?: string;
  message?: string;
  error?: string;
  id: number;
  title: string;
  slug: string;
  cover_image: string;
  description: string;
  aboutProject: string;
  media: [];
  skills: string[];
  deliverables?: string[];
  status: string;
  created_at: string;
  updated_at: string;
  
}

export const fetchAllProjects = async(): Promise<ProjectResponse[]> =>{
  try {
    const response = await API.get("/projects");
    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error);
  return { data: [], message: "Error detching Services"};
  }
}

export const projectDetails = async(slug: any): Promise<ProjectResponse[]> =>{
  try {
    const response = await API.get(`/projects/${slug}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error);
  return { data: [], message: "Error detching Services"};
  }
}