
<style>
    .form-container {
        align-self: center;
        align-items: center;
        background: #EEF2F7;
        padding: 20px;
        margin-top: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        width: 350px; /* Adjust width as needed */
    }
    .form-group {
        margin-bottom: 15px;
    }
    .form-group label {
        display: block;
        margin-bottom: 5px;
        font-size: 16px;
        color: #333;
    }
    .form-group input[type="text"],
    .form-group input[type="date"],
    .form-group input[type="number"],
    .form-group input[type="checkbox"],
    .form-group input[type="time"],
    .form-group input[type="file"] {
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-sizing: border-box;
    }
    .form-group input[type="checkbox"] {
        width: auto;
        margin-top: 0;
    }
    .form-group input[type="file"] {
        border: none;
    }
    </style>


<div class="form-container">
    <form>
        <div class="form-group">
            <label for="date">Date:</label>
            <input type="date" id="date" name="date">
        </div>
        <div class="form-group">
            <label for="time">Heure:</label>
            <input type="time" id="time" name="time">
        </div>
        <div class="form-group">
            <label for="examen">Examen:</label>
            <input type="text" id="examen" name="examen">
        </div>
        <div class="form-group">
            <label for="patient">Patient:</label>
            <input type="text" id="patient" name="patient">
        </div>
        <div class="form-group">
            <label for="metadata1">Metadata 1:</label>
            <input type="text" id="metadata1" name="metadata1">
        </div>
        <div class="form-group">
            <label for="metadata2">Metadata 2:</label>
            <input type="text" id="metadata2" name="metadata2">
        </div>
        <div class="form-group">
            <label for="mutuelle">Mutuelle:</label>
            <input type="text" id="mutuelle" name="mutuelle">
        </div>
        <div class="form-group">
            <label for="montant">Montant:</label>
            <input type="number" id="montant" name="montant">
        </div>
        <div class="form-group">
            <label for="confirme">Confirmé:</label>
            <input type="checkbox" id="confirme" name="confirme">
        </div>
        <div class="form-group">
            <label for="reglement">Règlement:</label>
            <input type="text" id="reglement" name="reglement">
        </div>
        <div class="form-group">
            <label for="pdf">Ajouter PDF:</label>
            <input type="file" id="pdf" name="pdf" accept="application/pdf">
        </div>
    </form>
</div>