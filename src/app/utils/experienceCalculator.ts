// Calculate experience incrementally - starts from your initial hire date
export const EXPERIENCE_START_DATE = new Date(2022, 6, 6); // June 6, 2022 (adjust to your start date)

export interface ExperienceData {
  totalYears: number;
  totalMonths: number;
  formattedYears: string;
  formattedDuration: string;
}

export function calculateExperience(): ExperienceData {
  const now = new Date();
  const startDate = new Date(EXPERIENCE_START_DATE);

  // Calculate total months
  let months = (now.getFullYear() - startDate.getFullYear()) * 12;
  months += now.getMonth() - startDate.getMonth();

  const totalMonths = months;
  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  // Total years with decimal (e.g., 4 for 4 years 1 months)
  const totalYears = +(years + remainingMonths / 12).toFixed(1);

  // Format as "X Yrs Y Mo"
  const formattedDuration = remainingMonths === 0 
    ? `${years} Year${years !== 1 ? 's' : ''}`
    : `${years} Yr${years !== 1 ? 's' : ''} ${remainingMonths} Mo`;

  return {
    totalYears,
    totalMonths,
    formattedYears: `${years}.${Math.round(remainingMonths / 12 * 10)}+`,
    formattedDuration,
  };
}

// For industry-specific experience
export interface IndustryExperience {
  healthcare: ExperienceData;
  technology: ExperienceData;
  recruitment: ExperienceData;
}

export function calculateIndustryExperience(): IndustryExperience {
  // Healthcare: ~2 years (Jan 2022 - Jan 2024)
  const healthcareStart = new Date(2024, 7, 1);
  // Technology: ~4 years (Sept 2021 - Present)
  const technologyStart = new Date(2022, 6, 6);
  // Recruitment: ~1 year (Apr 2024 - Present)
  const recruitmentStart = new Date(2024, 3, 1);

  const healthcare = calculateExperienceFrom(healthcareStart);
  const technology = calculateExperienceFrom(technologyStart);
  const recruitment = calculateExperienceFrom(recruitmentStart);

  return { healthcare, technology, recruitment };
}

export function calculateExperienceFrom(startDate: Date): ExperienceData {
  const now = new Date();

  let months = (now.getFullYear() - startDate.getFullYear()) * 12;
  months += now.getMonth() - startDate.getMonth();

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const totalYears = +(years + remainingMonths / 12).toFixed(1);

  const formattedDuration = remainingMonths === 0 
    ? `${years} Year${years !== 1 ? 's' : ''}`
    : `${years} Yr${years !== 1 ? 's' : ''} ${remainingMonths} Mo`;

  return {
    totalYears,
    totalMonths: months,
    formattedYears: `${years}.${Math.round(remainingMonths / 12 * 10)}+`,
    formattedDuration,
  };
}
