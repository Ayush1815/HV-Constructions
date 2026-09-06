export class InquirySubmitError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InquirySubmitError";
  }
}

export async function submitInquiry(data: Record<string, unknown>): Promise<void> {
  // If honeypot is filled, silently resolve (prevent spam)
  if (data.website) {
    return Promise.resolve();
  }

  try {
    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new InquirySubmitError("Failed to submit inquiry. Please try again later.");
    }
  } catch (error) {
    if (error instanceof InquirySubmitError) {
      throw error;
    }
    throw new InquirySubmitError("Network error. Please check your connection and try again.");
  }
}
