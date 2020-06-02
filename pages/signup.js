import { useRouter } from 'next/router';
import PageLayout from "../components/PageLayout/PageLayout";
import LoginPageStyles from "../styles/login.style";
import { useState } from "react";
import * as APIClient from "../api_client";

export default function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <PageLayout title="GitCenter">
      <div className="container-md pb-3 page-container">
        <div className="row h-100 justify-content-center">
          <div className="col-md-6 align-self-center">
            <div className="card pb-4 pt-4">
              <div className="card-body">
                <h4 className="card-title">Sign Up</h4>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const res = await APIClient.createUser(name, username, password);
                    if(!res.err) router.push('/login');
                  }}
                  className="d-flex flex-column align-content-center"
                >
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    type="password"
                    className="form-control mb-2"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Sign Up"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{LoginPageStyles}</style>
    </PageLayout>
  );
}
