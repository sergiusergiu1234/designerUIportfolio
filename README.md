
clone project

# Backend Setup
### 1. Set Up Backend
1. **Navigate to Backend Directory:**  
   `$ cd portfolio-backend`
   
2. **Install Dependencies:**  
   `$ npm install`

### 2. Set Up Docker
1. **Install Docker:** Download and install from [docker.com](https://www.docker.com/).
2. **Create `.env` Files:** Create `.env` file filling out necessary configurations. Needed fields are in .env.template. The AUTH0 credentials in private.
3. **Start Docker Containers:**  
   `$ docker compose up -d`
4. **Access MinIO Interface:** Open [http://localhost:9000](http://localhost:9000) with credentials: `username: minioadmin`, `password: minioadmin`.
5. **Configure MinIO:** In the MinIO interface:
   - **Access Keys Tab:** Click **Create access key** -> **Create** -> Copy keys to `.env` file.
   - under **Administrator** -> click **Buckets** -> **Create Bucket** -> Set **Bucket Name** to `test-bucket` (or your preferred name) and add this to `.env` at `MINIO_BUCKET_NAME`.
6. **Complete Environment Variables:** Add `AUTH0_DOMAIN`, `AUTH0_CLIENTID`, and `AUTH0_AUDIENCE` to `.env` from private message.

### 3. Start the Application  
   `$ npm run start`

### 4. Access API Documentation  
All endpoints are documented at [http://localhost:3001/api](http://localhost:3001/api).




# Frontend Setup
from root 
cd portfolio-frontend

create and complete .env file with credentials from private message

npm install



npm start
access admin page at http://localhost:3000/admin

login into admin dashboard
        email:     test@gmail.com
        password:  Uj9!jc3YJD>QYzbz@4a6
