const Decipher = () => {
    return (
        <div className="bg-color"> 
            <div className="mx-44">
            <div>
                <h2>Decipher is coming in 2024!</h2>
                <p>Decipher identifies novel therapeutic targets from human or mouse single cell mRNA expression data. Bulk mRNA expression data can be used to strengthen the analysis.</p>
                <p>Decipher enables you to go from raw sequencing data to experimentally validated, novel therapeutic targets within 12 months.</p>
                <p>Decipher can be applied to experimental data examining interactions between cells including:</p>
                <ul>
                    <li>Dendritic cells and CD8 T cells to develop cancer immunotherapies</li>
                    <li>Cancer, immune, and stromal cells to interrogate the tumor microenvironment</li>
                    <li>Airway epithelial cells and immune cells to study respiratory diseases</li>
                </ul>
                <p>While Decipher is a disease-agnostic algorithm, our team pairs Decipher with human expertise including expert domain knowledge and pre-clinical insights to achieve optimal results.</p>
                <div>
                    <img src="https://insigene.com/wp-content/uploads/2023/04/decipher_diagram.png" alt="" />
                </div>
                <p>Cells communicate by sending and receiving molecular messages or signals. For example, ligands produced by sender cells are often received by receptors on receiver cells. The exchange of molecular messages between cells triggers intracellular signaling cascades within cells that converge on transcription factors (TF), which in turn bind to regulatory regions in the DNA sequence to activate the expression of downstream target genes (TG). A regulon is the complete set of target genes that is driven by a given transcription factor.</p>
                <p>Decipher works by building 2 types of molecular networks: 1) ligand-receptor mediated cell-to-cell communication networks operating between cells, and 2) gene regulatory networks between TF and inferred TG operating within cells, then finding ligand-receptor signals that predict the activity of TF-TG networks.</p>
                <p>A 12-month subscription for $19,999 USD/month includes access to our whole team of biologists and bioinformatics experts that will assist you in designing the optimal sequencing experiment and provide bioinformatics analysis using Decipher.</p>
            </div>
            
        </div>
        </div>
    );
};

export default Decipher;