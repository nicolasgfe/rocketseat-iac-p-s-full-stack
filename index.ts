import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
const firstBucket = new aws.s3.Bucket("primeiro-bucket", {
	bucket: "primeiro-bucket-pos-full-stack-360-2",
	tags: {
		IAC: "true"
	}
});

const ecr = new aws.ecr.Repository("primeiro-ecr", {
	name: "primeiro-ecr",
	imageTagMutability: "IMMUTABLE",
	tags: {
		IAC: "true"
	}
})

// Export the name of the bucket
export const firstBucketName = firstBucket.id;
export const firstBucketRegion = firstBucket.region;
export const firstBucketArn = firstBucket.arn;



export const ecrName= ecr.name
export const ecrRepositoryUrl = ecr.repositoryUrl