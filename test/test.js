const test = require('tape');
const supertest = require('supertest');
const app = require('../src/app');
const grabData = require('../src/views/helpers/index')

const testObj = {
    items: [
        {
            kind: "books#volume",
            id: "BoMLNjEISQsC",
            etag: "fLZvNVDIBX8",
            selfLink: "https://www.googleapis.com/books/v1/volumes/BoMLNjEISQsC",
            volumeInfo: {
                title: "Human Insulin",
                subtitle: "Clinical Pharmacological Studies in Normal Man",
                authors: [
                    "D.R. Owens"
                ],
                publisher: "Springer Science & Business Media",
                publishedDate: "1986-05-31",
                description: "Since insulin became available for the treatment of diabetes in 1922 a number of major advances have been made, which include the modification of insulin to vary its timing of action, its purification, and latterly, the production of human insulin. Human insulin in quantities sufficiently large for therapy has been made available by two techniques developed in parallel during the late 1970s. These involve either (i) formulation in E. coli bacteria suitably encoded by DNA recombinant methods of the A- and B-chains of human insulin followed by a chain combination reaction ('biosynthetic' human insulin) or (ii) enzymatic conversion (transpeptidation) of porcine insulin brought to react with a threonine ester by porcine trypsin in a mixture of water and organic solvents, yielding human insulin ('semi-synthetic' human insulin). This book includes the first clinical-pharmacological studies of each of the highly purified 'semi-synthetic' human insulin preparations: Actrapid ® HM; Monotard® HM; Protaphane® HM; Actraphane® HM; and Ultratard® HM (Novo Industri A/S, Copenhagen). The preliminary studies established their safety and efficacy relative to their porcine and bovine counterparts emphasising the relevance of species and formulation on the pharmacokinetics and biological responses to insulin. Additional investigations with human insulin demonstrated the influence of insulin concentration, site of administration, the addition of aprotinin to insulin and the mixing of 'short-' and 'intermediate-acting' formulations on insulin 'bioavailability'. Examination of the 'within' and 'between' subject day-to-day variation in absorption and the effect of subcutaneous insulin also demonstrates the dominating influence of insulin responsiveness.",
                industryIdentifiers: [
                    {
                        type: "ISBN_10",
                        identifier: "0852009518"
                    },
                    {
                        type: "ISBN_13",
                        identifier: "9780852009512"
                    }
                ],
                readingModes: {
                    text: false,
                    image: true
                },
                pageCount: 312,
                printType: "BOOK",
                categories: [
                    "Medical"
                ],
                maturityRating: "NOT_MATURE",
                allowAnonLogging: false,
                contentVersion: "0.2.1.0.preview.1",
                panelizationSummary: {
                    containsEpubBubbles: false,
                    containsImageBubbles: false
                },
                imageLinks: {
                    smallThumbnail: "http://books.google.com/books/content?id=BoMLNjEISQsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    thumbnail: "http://books.google.com/books/content?id=BoMLNjEISQsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                language: "en",
                previewLink: "http://books.google.com/books?id=BoMLNjEISQsC&pg=PA20&dq=human+intitle:human&hl=&cd=1&source=gbs_api",
                infoLink: "http://books.google.com/books?id=BoMLNjEISQsC&dq=human+intitle:human&hl=&source=gbs_api",
                canonicalVolumeLink: "https://books.google.com/books/about/Human_Insulin.html?hl=&id=BoMLNjEISQsC"
            },

        },
        {
            kind: "books#volume",
            id: "dNwPVJ1cp2kC",
            etag: "HStEqqWt8Fk",
            selfLink: "https://www.googleapis.com/books/v1/volumes/dNwPVJ1cp2kC",
            volumeInfo: {
                title: "Human Resource Accounting",
                subtitle: "Advances in Concepts, Methods, and Applications",
                authors: [
                    "Eric G. Flamholtz",
                    "Professor of Management Eric G Flamholtz"
                ],
                publisher: "Springer Science & Business Media",
                publishedDate: "1999-05-31",
                description: "Updating the book since its last publication in 1985, this new edition of the landmark work on human resource accounting has been substantially revised to reflect the current state of the field through the late 1990s. The economies of many nations are increasingly dominated by knowledge- or information-based sectors driven by highly trained and specialized personnel. Whereas physical capital was of the utmost economic importance in the past, the distinctive feature of the emerging post-industrial economies is an increasing reliance on human and intellectual capital. The growing importance of human capital as a determinant of economic success at both the macroeconomic and microeconomic levels dictates that firms need to adjust to this new economic reality. Specifically, if human capital is a key determinant for organizational success, then investment in the training and development of employees to improve performance is a critical component of this success. This broad socioeconomic shift underscores a growing need for measuring and analyzing human capital when making managerial and financial decisions. Yet important human resource decisions involving hiring, training, compensation, productivity and other matters are often made in the absence of specific information about the different costs and benefits of these particular choices. Human resource accounting is a managerial tool that can be used to gain this valuable information by measuring the costs of recruiting, hiring, compensating and training employees. It can be used to evaluate employee training programs, increase productivity, and improve managerial decision-making regarding promotions, transfers, layoffs, replacement and turnover. Case studies illustrate, for example: How an insurance company evaluated a training program for claims adjusters and found that it would return two dollars for every one dollar spent. How a human resources accounting study revealed that an electronics firm's losses from employee turnover equalled one year's new income, and how the company initiated a program to reduce turnovers. The third edition presents the current state of the art of human resource accounting by (1) examining the concepts and methods of accounting for people as human resources; (2) explaining the present and potential uses of human resource accounting for human resource managers, line managers and investors; (3) describing the research, experiments and applications of human resource accounting in organizations; (4) considering the steps involved in developing a human resource accounting system; and (5) discussing some of the remaining aspects of human resource accounting that require further research.",
                pageCount: 390,
                printType: "BOOK",
                categories: [
                    "Business & Economics"
                ],
                averageRating: 4,
                ratingsCount: 3,
                imageLinks: {
                    smallThumbnail: "http://books.google.com/books/content?id=dNwPVJ1cp2kC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    thumbnail: "http://books.google.com/books/content?id=dNwPVJ1cp2kC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                language: "en",
                previewLink: "http://books.google.com/books?id=dNwPVJ1cp2kC&pg=PA9&dq=human+intitle:human&hl=&cd=2&source=gbs_api",
                infoLink: "http://books.google.com/books?id=dNwPVJ1cp2kC&dq=human+intitle:human&hl=&source=gbs_api",
                canonicalVolumeLink: "https://books.google.com/books/about/Human_Resource_Accounting.html?hl=&id=dNwPVJ1cp2kC"
            },
        }]
}

test("Success testing", (t) => {
    t.equal(1, 1, "should be equal");
    t.end();
});

test('Testing for endpoint /', (t) => {
    supertest(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/)
        .end((err, res) => {
            t.error(err);
            t.end();
        })
})

test("Testing /books endpoint", (t) => {
    supertest(app)
        .get('/books')
        .expect(200)
        .expect('Content-Type', /html/)
        .end((err, res) => {
            t.error(err);
            // t.deepEqual(grabData(testObj))
            console.log(res.text);
            t.end();
        })
})