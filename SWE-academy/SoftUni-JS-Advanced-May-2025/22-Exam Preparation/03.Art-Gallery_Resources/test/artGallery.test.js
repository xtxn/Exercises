import { expect } from "chai";
import artGallery from "../artGallery.js";

describe("artGallery", () => {

    describe("addArtwork(title, dimensions, artist)", () => {
        //check for invalid input
        it("Should throw error if title or artist is not a string", () => {
            expect(() => artGallery.addArtwork('asds', '30 x 40', 15)).to.throw(Error, 'Invalid Information!');
            expect(() => artGallery.addArtwork(15, '30 x 40', 'Van Gogh')).to.throw(Error, 'Invalid Information!');
        });
        it("Should throw error if dimensions are not'AA x BB'", () => {
            expect(() => artGallery.addArtwork('Pic', 'abv', 'Van Gogh')).to.throw(Error, 'Invalid Dimensions!');
        });
        it("Should the artist be only one of three given names", () => {
            expect(() => artGallery.addArtwork('Pic', '30 x 40', 'Vinni')).to.throw(Error, 'This artist is not allowed in the gallery!');
        });
        //valid input
        it("Should return valid message", () => {
            expect(artGallery.addArtwork('Scream', '30 x 40', 'Picasso')).to.equal("Artwork added successfully: 'Scream' by Picasso with dimensions 30 x 40.");
        });
    });

    describe("calculateCosts (exhibitionCosts, insuranceCosts, sponsor)", () => {
        it('Should costs be a positive numbers', () => {
            expect(() => artGallery.calculateCosts(200, '20', true)).to.throw(Error, "Invalid Information!");
            expect(() => artGallery.calculateCosts('200', 20, true)).to.throw(Error, "Invalid Information!");
            expect(() => artGallery.calculateCosts(-200, 20, true)).to.throw(Error, "Invalid Information!");
            expect(() => artGallery.calculateCosts(200, -20, true)).to.throw(Error, "Invalid Information!");
            expect(() => artGallery.calculateCosts(200, 20, 'true')).to.throw(Error, "Invalid Information!");
        })
        it("Should be valid with discount", () => {
            expect(artGallery.calculateCosts(200, 300, true)).to.equal('Exhibition and insurance costs are 450$, reduced by 10% with the help of a donation from your sponsor.')
        });
        it("Should be valid without discount", () => {
            expect(artGallery.calculateCosts(200, 300, false)).to.equal('Exhibition and insurance costs are 500$.');
        });
    });

    describe("organizeExhibits(artworksCount, displaySpacesCount)", () => {
        //artworksPerSpace = Math.floor(artworksCount / displaySpacesCount);

        it("Should counts to be positive numbers throw error", () => {
            expect(() => artGallery.organizeExhibits(12, '15')).to.throw(Error, "Invalid Information!");
            expect(() => artGallery.organizeExhibits('12', 15)).to.throw(Error, "Invalid Information!");
            expect(() => artGallery.organizeExhibits(-12, 15)).to.throw(Error, "Invalid Information!");
            expect(() => artGallery.organizeExhibits(12, -15)).to.throw(Error, "Invalid Information!");
        });
        it("Should number of artworks less than 5", () => {
            expect(artGallery.organizeExhibits(10, 3)).to.equal(`There are only ${Math.floor(10 / 3)} artworks in each display space, you can add more artworks.`);
        });
        it("Should number of artworks more than 5", () => {
            expect(artGallery.organizeExhibits(20, 2)).to.equal(`You have 2 display spaces with 10 artworks in each space.`);
        });
    });
})