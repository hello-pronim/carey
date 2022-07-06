interface NewAppData {
  email: string;
  name: string;
}

interface ResumeAppData {
  email: string;
  id: string;
}

interface ForgotData {
  email: string;
}

class AppProcessorClient {
  endPoint: string;
  version: string = "v1";

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  async newApplication(data: NewAppData) {
    const res = await fetch(`${this.endPoint}/${this.version}/application`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  }

  async resumeMagicLink(data: ResumeAppData) {
    const res = await fetch(
      `${this.endPoint}/${this.version}/application/resume-magic-link`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return res.json();
  }

  async forgot(data: ForgotData) {
    const res = await fetch(
      `${this.endPoint}/${this.version}/application/forgot`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return res.json();
  }
}

export default new AppProcessorClient(
  process.env.NEXT_PUBLIC_APP_PROCESSOR_URL
);
