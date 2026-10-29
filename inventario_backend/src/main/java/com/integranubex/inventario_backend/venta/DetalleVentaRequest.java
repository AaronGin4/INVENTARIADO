package com.integranubex.inventario_backend.venta;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;

public record DetalleVentaRequest(
        @NotNull(message = "El lote es obligatorio.") Integer idLote,
        @NotNull(message = "La cantidad es obligatoria.") @DecimalMin(value = "0.001", message = "La cantidad debe ser mayor que cero.") @Digits(integer = 9, fraction = 3, message = "La cantidad admite hasta 9 enteros y 3 decimales.") BigDecimal cantidad,
        @NotNull(message = "El precio unitario es obligatorio.") @DecimalMin(value = "0.00", message = "El precio unitario debe ser cero o mayor.") @Digits(integer = 10, fraction = 2, message = "El precio admite hasta 10 enteros y 2 decimales.") BigDecimal precioUnitario,
        @NotNull(message = "El descuento es obligatorio.") @DecimalMin(value = "0.00", message = "El descuento debe ser cero o mayor.") @Digits(integer = 10, fraction = 2, message = "El descuento admite hasta 10 enteros y 2 decimales.") BigDecimal descuento) {
}
