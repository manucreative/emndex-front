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

// A single config entry
interface ConfigItem {
  key: string;
  value: string;
  file?: string;
}

// Response shape: category -> array of configs
export interface ConfigResponse {
  [category: string]: ConfigItem[];  // 👈 index signature
}


export const getConfig = async (): Promise<ConfigResponse | null> => {
  try {
    const response = await API.get("/configurations");
    return response.data as ConfigResponse;  // ensure correct type
  } catch (error) {
    console.error("Error fetching config:", error);
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

type ServiceFetchResult = {
  data: ServiceResponse[];
  message: string;
};

export const fetchServices = async (): Promise<ServiceFetchResult> => {
  try {
    const response = await API.get("/getServices");
    return response.data as ServiceFetchResult;
  } catch (error) {
    console.error("Error fetching services:", error);
    return { data: [], message: "Error fetching Services" };
  }
};

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

export const fetchAllProjects = async(): Promise<ProjectResponse[]> => {
  try {
    const response = await API.get("/projects");
    return response.data as ProjectResponse[];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export const projectDetails = async (slug: string): Promise<ProjectResponse | null> => {
  try {
    const response = await API.get(`/projects/${slug}`);
    return response.data as ProjectResponse;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
};


interface awards {
  id: string;
  award_name: string;
  issued_by: string;
  date_received: string;
}

interface resume {
  id: string;
  dob: string;
  id_no: string;
  gender: string;
  marital_status: string;
  bio: string;
  linkedin: string;
  github: string;
  website: string;
}

interface education {
  id: string;
  institution_name: string;
  degree: string;
  field_of_study: string;
  start_date: string;
  end_date: string;
  description: string;
}

interface experiences {
  id: string;
  company_name: string;
  position: string;
  duties_and_responsibilities: string[];
  start_date: string;
  end_date: string;
  description: string;
}

interface skills {
  id: string;
  skill_name: string;
  proficiency_level: string;
}

interface interests {
  id: string;
  interest_name: string;
}

interface expertise {
  id: string;
  expertise_name: string;
}

interface references {
  id: string;
  referee_name: string;
  referee_title: string;
  company_one: string;
  company_two: string;
  postal_address: string;
  postal_code: string;
  city: string;
  email_address: string;
  phone_no: string;
  website: string;
}

interface certification {
id: string;
certificate_name: string;
issued_by: string;
issue_date: string;
expiration_date: string;
}

interface languages {
  id: string;
  language: string;
  proficiency: string;
}

export interface UserResponse {
  // roles: roles[];
  awards: awards[];
  resume: resume;
  education: education[];
  experiences: experiences[];
  skills: skills[];
  interests: interests[];
  certifications: certification[];
  languages: languages[];
  references: references[];
  expertise: expertise[];
  id: string;
  first_name: string;
  last_name: string;
  city: string;
  title: string;
  country: string;
  address: string;
  admin_phone: string;
  email: string;
  admin_image: string;
}

export const fetchUsers = async (): Promise<UserResponse[]> => {
  const response = await API.get('/getUsers');
  return response.data; // should be an array
};
