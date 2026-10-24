import React, { useEffect, useState } from "react";
import './Github.css';


const Github = () => { 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function handleGithubRepo() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.github.com/users/RochakSiwach/repos",
          {
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error(`Http error ${response.status}`);
        }

        const data = await response.json();
;
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }

    handleGithubRepo();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <div className="github">
        <p>Repos : </p>
        <p>Streak : </p>
      </div>
    </div>
  );
};

export default Github;
