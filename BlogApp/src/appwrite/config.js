import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.projectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, featuredimage, content, status, userid }) {
    try {
      return await this.databases.createDocument(
        conf.databaseId,
        conf.collectionId,
        slug,
        {
          title,
          content,
          featuredimage,
          status,
          userid,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { title, featuredimage, content, status }) {
    try {
      return await this.databases.updateDocument(
        conf.databaseId,
        conf.collectionId,
        slug,
        {
          title,
          content,
          featuredimage,
          status,

        }
      );
    } catch (error) {
      console.log("ERRORR!!!::", error);
      
    }
  }

  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        conf.databaseId,
        conf.collectionId,
        slug
      );
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.databaseId,
        conf.collectionId,
        slug
      );
    } catch (error) {
      return error;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.databaseId,
        conf.collectionId,
        queries
      );
    } catch (error) {
      return error;
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(conf.bucketId, ID.unique(), file);
    } catch (error) {
      throw error;
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.bucketId, fileId);
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }

   getFilePreview(fileId){
    return this.bucket.getFilePreview(conf.bucketId,fileId)
  }

}

const service = new Service();

export default service;
